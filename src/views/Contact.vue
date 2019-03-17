<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getContact" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && contact.length < 1" style="text-align: center;">No contacts to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in contact" :key="i">
        <div slot="header">{{ item.contactname }} - {{ item.date }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Contact ID: </b>{{ item.spring_id }}</div>
                <div><b>Contact From: </b>{{ item.contactname }}</div>
                <div><b>Date: </b>{{ item.date }}</div>
                <div><b>Email: </b>{{ item.email }}</div>
                <div><b>Phone: </b>{{ item.phone }}</div>
                <div><b>Message: </b>{{ item.message }}</div>
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

import { mapGetters } from 'vuex'

import Toolbar from '@/components/Toolbar.vue'
import LoadingWheel from '@/components/LoadingWheel.vue'

export default {
  name: 'contact',
  data () {
    return {
      contact: [],
      loading: false,
      name: 'Contact'
    }
  },
  mounted () {
    this.getContact()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getContact () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/contact`, { headers }).then(({ data }) => {
        console.log(data)
        this.contact = data

        // Hide the loader
        this.loading = false
      })
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
