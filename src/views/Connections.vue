<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getConnections" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && connections.length < 1" style="text-align: center;">No connections to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(connection, i) in connections" :key="i">
        <div slot="header"><b>{{ connection.name }}</b> wants to connect with services</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Applicant:</b> {{ connection.name }}</div>
                <div><b>Date/Time of Application:</b> {{ moment(connection.date).format('MMMM Do YYYY, h:mm:ss a') }}</div>
                <br>
                <div><b>Question Responses</b></div>
                <br>
                <div><b>Would you want to meet with an advisor face-to-face?</b> {{ connection.questions.q1.answer ? 'Yes' : 'No' }}</div>
                <br>
                <div><b>How urgent is your request?</b> {{ connection.questions.q2.answer }}</div>
                <br>
                <div><b>Is your request money-related?</b> {{ connection.questions.q3.answer ? 'Yes' : 'No' }}</div>
                <br>
                <div><b>Would you like an advisor with a cultural background?</b> {{ connection.questions.q4.answer ? 'Yes' : 'No' }}</div>
                <br>
                <div><b>Would you like to speak to an advisor in a group environment?</b> {{ connection.questions.q5.answer ? 'Yes' : 'No' }}</div>
                <br>
                <div><b>Is there any other information you want to mention?</b></div>
                <div>{{ connection.questions.q6.comments }}</div>
                <!-- <v-btn color="success" @click="markApplicationRead(i)">Mark Application as Read</v-btn>
                <v-btn color="error" @click="deleteApplication(i)">Delete Application</v-btn> -->
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

import Toolbar from '@/components/Toolbar.vue'
import LoadingWheel from '@/components/LoadingWheel.vue'

export default {
  name: 'connections',
  data () {
    return {
      connections: [],
      loading: false,
      name: 'Connect'
    }
  },
  mounted () {
    this.getConnections()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getConnections () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `Bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/connect`, { headers }).then(({ data }) => {
        console.log(data)
        this.connections = data

        // Hide the loader
        this.loading = false
      })
    },
    moment (time) {
      return moment(time)
    }
  },
  components: {
    LoadingWheel,
    Toolbar
  }
}
</script>

<style>

</style>
