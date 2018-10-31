<template>
  <div>
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && feedback.length < 1" style="text-align: center;">No feedback to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in feedback" :key="i">
        <div slot="header">{{ item.title }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div>Feedback From: {{ item.name }}</div>
                <div>{{ item.message }}</div>
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

import LoadingWheel from '@/components/LoadingWheel.vue'

export default {
  name: 'feedback',
  data () {
    return {
      feedback: [],
      loading: false
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
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/feedback`, { headers }).then(({ data }) => {
        console.log(data)
        this.feedback = data

        // Hide the loader
        this.loading = false
      })
    }
  },
  components: {
    LoadingWheel
  }
}
</script>

<style>

</style>
