<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in feedback" :key="i">
        <div slot="header">{{ item.title }}</div>
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
  name: 'feedback',
  data () {
    return {
      feedback: []
    }
  },
  mounted () {
    this.getFeedback()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getFeedback () {
      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/feedback`, { headers }).then(({ data }) => {
        console.log(data)
        this.feedback = data
      })
    }
  }
}
</script>

<style>

</style>
