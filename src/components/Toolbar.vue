<template>
  <v-toolbar app>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat icon color="green" @click="refreshMethod">
      <v-icon>refresh</v-icon>
    </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'toolbar',
  props: {
    title: { type: String },
    refreshMethod: { type: Function }
  }
}
</script>

<style>

</style>
