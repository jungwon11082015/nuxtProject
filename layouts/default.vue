<template>
  <div id="app">
    <Header />
    <loading />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/pages/header.vue'
import loading from '@/pages/loading.vue'
import Footer from '@/pages/footer.vue'

export default {
  components: { Header, loading, Footer }
}
</script>

<style>


</style>
