<template>
  <div>
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && applications.length < 1" style="text-align: center;">No applications to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in applications" :key="i">
        <div slot="header"><b>{{ item.applicantDetails.name }}</b> has applied for the {{ item.opportunityReference }} Opportunity<span v-if="!item.isRead"> - UNREAD</span></div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Applicant:</b> {{ item.applicantDetails.name }}</div>
                <div><b>Contact Number:</b> {{ item.applicantDetails.phoneNumber }}</div>
                <div><b>Date/Time of Application:</b> {{ moment(item.date).format('MMMM Do YYYY, h:mm:ss a') }}</div>
                <div><b>Opportunity:</b> {{ item.opportunityReference }}</div>
                <br>
                <v-btn color="success" @click="markApplicationRead(i)">Mark Application as Read</v-btn>
                <v-btn color="error" @click="deleteApplication(i)">Delete Application</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import axios from 'axios'
import bcryptjs from 'bcryptjs'
import moment from 'moment'
import { mapGetters } from 'vuex'

import { EventBus } from '@/eventbus'

import LoadingWheel from '@/components/LoadingWheel.vue'

export default {
  name: 'applications',
  data () {
    return {
      applications: [],
      loading: false
    }
  },
  mounted () {
    this.getApplications()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getApplications () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `Bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/applications`, { headers }).then(({ data }) => {
        console.log(data)
        this.applications = data

        // Hide the loader
        this.loading = false
      })
    },
    deleteApplication (index) {
      let headers = {
        'authorization': `Bearer ${bcryptjs.hashSync('springPOSTtoken')}`
      }

      let data = this.applications[index]

      axios.delete(`${this.getApiUrl}/applications`, { data, headers }).then(res => {
        EventBus.$emit('SHOW_SNACKBAR', res.data.message)
        this.applications.splice(index, 1)
      })
    },
    markApplicationRead (index) {
      let headers = {
        'authorization': `Bearer ${bcryptjs.hashSync('springPOSTtoken')}`
      }

      let data = this.applications[index]
      data.isRead = true

      axios.put(`${this.getApiUrl}/applications`, data, { headers }).then(res => {
        EventBus.$emit('SHOW_SNACKBAR', res.data.message)
      })
    },
    moment (time) {
      return moment(time)
    }
  },
  components: {
    LoadingWheel
  }
}
</script>

<style>

</style>
