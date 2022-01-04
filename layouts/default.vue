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
  components: { Header, loadingBar, Footer },
  data(){
      return {
        loadingChecked: null,
      }
  },

  created(){
    this.$nuxt.$on('eventBusLoadingCheck', (isLoadingCheck) => {
        this.loadingChecked = isLoadingCheck;
        if( this.loadingChecked ){
          const body = document.getElementsByTagName( "body" )[0];
          body.style.overflow = "auto";
        }
    })

  },
  destroyed() {
    this.loadingChecked = null; 
  },

}
</script>

<style>
 body{ overflow: hidden; }

</style>
