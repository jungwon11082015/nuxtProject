<template>
  <div id="app">
    <loadingBar />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/pages/header.vue'
import loadingBar from '@/components/loadingBar.vue'
import Footer from '@/pages/footer.vue'

export default {
  components: { Header, loadingBar, Footer }
}
</script>

<style>


</style>
