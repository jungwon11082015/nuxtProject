<template>
  <div id="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/pages/header.vue'
import Footer from '@/pages/footer.vue'

export default {
  components: {Header,Footer}
}
</script>

<style>


</style>
