<template>
  <v-navigation-drawer app permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Spring Admin</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="doSomething" :to="item.route">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'nav-drawer',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Applications', icon: 'work', route: '/applications' },
        { title: 'Connect', icon: 'chat', route: '/connect' },
        { title: 'Trade', icon: 'attach_money', route: '/trade' },
        { title: 'Feedback', icon: 'feedback', route: '/feedback' }
      ]
    }
  },
  methods: {
    doSomething () {

    }
  }
}
</script>

<style>

</style>
