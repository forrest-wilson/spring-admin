<template>
  <div class="loader" v-if="loading">
    <img :src="imgSrc" alt="Loading...">
  </div>
</template>

<script>
export default {
  name: 'loadingwheel',
  data () {
    return {
      imgSrc: require('@/assets/loader.svg')
    }
  },
  props: {
    loading: { type: Boolean }
  }
}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  max-height: 50px;
}
</style>
