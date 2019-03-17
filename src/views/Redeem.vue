<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getRedeem" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && redeem.length < 1" style="text-align: center;">No redeem requests to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in redeem" :key="i">
        <div slot="header">{{ item.name }} - {{ item.reward_name }} - {{ item.date }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Spring ID: </b>{{ item.spring_id }}</div>
                <div><b>Name: </b>{{ item.name }}</div>
                <div><b>Date: </b>{{ item.date }}</div>
                <div><b>Reward ID: </b>{{ item.reward_id }}</div>
                <div><b>Reward Name: </b>{{ item.reward_name }}</div>
                <div><b>Reward Amount: </b>{{ item.reward_amount }}</div>
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
  name: 'redeem',
  data () {
    return {
      redeem: [],
      loading: false,
      name: 'Redeem'
    }
  },
  mounted () {
    this.getRedeem()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getRedeem () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/redeem`, { headers }).then(({ data }) => {
        console.log(data)
        this.redeem = data

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
