<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getLearning" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && learning.length < 1" style="text-align: center;">No learning completions to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in learning" :key="i">
        <div slot="header">{{ item.name }} - {{ item.learning_id }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Spring ID: </b>{{ item.spring_id }}</div>
                <div><b>Name: </b>{{ item.name }}</div>
                <div><b>Date: </b>{{ item.date }}</div>
                <div><b>Learning ID: </b>{{ item.learning_id }}</div>
                <div><b>Score: </b>{{ item.score }}</div>
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
  name: 'learning',
  data () {
    return {
      learning: [],
      loading: false,
      name: 'Learning'
    }
  },
  mounted () {
    this.getLearning()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getLearning () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/learning`, { headers }).then(({ data }) => {
        console.log(data)
        this.learning = data

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
