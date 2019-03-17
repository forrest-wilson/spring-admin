<template>
  <div>
    <Toolbar :title="name" :refreshMethod="getPromoCode" />
    <LoadingWheel :loading="loading" />
    <p v-if="!loading && promocode.length < 1" style="text-align: center;">No promo code redemptions to show</p>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item, i) in promocode" :key="i">
        <div slot="header">{{ item.promocode }}</div>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <div><b>Request From: </b>{{ item.name }}</div>
                <div><b>Financial Mentor: </b>{{ item.mentor_name }}</div>
                <div><b>Promo Code: </b>{{ item.promocode }}</div>
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
  name: 'promoCode',
  data () {
    return {
      promocode: [],
      loading: false,
      name: 'PromoCode'
    }
  },
  mounted () {
    this.getPromoCode()
  },
  computed: {
    ...mapGetters(['getApiUrl'])
  },
  methods: {
    getPromoCode () {
      // Show the loader
      this.loading = true

      let headers = {
        'authorization': `bearer ${bcryptjs.hashSync('springtoken')}`
      }

      axios.get(`${this.getApiUrl}/promoCode`, { headers }).then(({ data }) => {
        console.log(data)
        this.promocode = data

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
