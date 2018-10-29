<template>
  <div id="app">
    <v-app>
      <NavDrawer />
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'

export default {
  name: 'app',
  components: {
    NavDrawer
  }
}
</script>

<style lang="scss">

</style>
