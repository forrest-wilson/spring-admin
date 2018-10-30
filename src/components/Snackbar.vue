<template>
  <v-snackbar v-model="showing" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'" :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'">
    {{ message }}
    <v-btn color="pink" flat @click="showing = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { EventBus } from '@/eventbus'

export default {
  name: 'snackbar',
  data () {
    return {
      message: '',
      showing: false,
      timeout: 3000,
      y: 'top',
      x: null,
      mode: ''
    }
  },
  mounted () {
    EventBus.$on('SHOW_SNACKBAR', message => {
      this.message = message
      this.showing = true
    })
  }
}
</script>

<style>

</style>
