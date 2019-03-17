<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getDream" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && dream.length < 1" style="text-align: center;">No dreams to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in dream" :key="i">
        <div slot="header">{{ item.name }} - {{ item.date }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Spring ID: </b>{{ item.spring_id }}</div>
                <div><b>Name: </b>{{ item.name }}</div>
                <div><b>Date: </b>{{ item.date }}</div>
                <div><b>Selected Dreams: </b>{{ item.selectedDreams }}</div>
                <div><b>Questionnaire Responses: </b>{{ item.questionnaireResponses }}</div>
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
  name: 'dream',
  data () {
    return {
      dream: [],
      loading: false,
      name: 'Dream'
    }
  },
  mounted () {
    this.getDream()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getDream () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/dream`, { headers }).then(({ data }) => {
        console.log(data)
        this.dream = data

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
