<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in applications" :key="i">
        <div slot="header">{{ item.applicantDetails.name }}: {{ item.opportunityReference }}</div>
        <v-card>
          <v-card-title>Feedback From: {{ item.name }}</v-card-title>
          <v-card-text>{{ item.message }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import axios from 'axios'
import bcryptjs from 'bcryptjs'

import { mapGetters } from 'vuex'

export default {
  name: 'applications',
  data () {
    return {
      applications: []
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
      let headers = {
        'authorization': `Bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/applications`, { headers }).then(({ data }) => {
        console.log(data)
        this.applications = data
      })
    }
  }
}
</script>

<style>

</style>
