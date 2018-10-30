<template>
  <div id="app">
    <v-app>
      <NavDrawer />
      <v-content>
        <v-container fluid>
          <Snackbar />
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'
import Snackbar from '@/components/Snackbar.vue'

export default {
  name: 'app',
  components: {
    NavDrawer,
    Snackbar
  }
}
</script>

<style lang="scss">

</style>
