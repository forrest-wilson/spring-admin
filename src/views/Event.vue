<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getEvent" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && event.length < 1" style="text-align: center;">No events to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in event" :key="i">
        <div slot="header">{{ item.name }} - {{ item.eventpage }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Spring ID: </b>{{ item.spring_id }}</div>
                <div><b>Name: </b>{{ item.name }}</div>
                <div><b>Date: </b>{{ item.date }}</div>
                <div><b>Event Page: </b>{{ item.eventpage }}</div>
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
  name: 'event',
  data () {
    return {
      event: [],
      loading: false,
      name: 'Event'
    }
  },
  mounted () {
    this.getEvent()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getEvent () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/event`, { headers }).then(({ data }) => {
        console.log(data)
        this.event = data

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
