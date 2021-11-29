<template>
  <div v-if="loading" class="loading-page">
    <div class="counter">
        <p>loading</p>
        <h1>{{ num }}%</h1>
        <span ref="line"></span>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      counter : 0,
      num:0,
    }),
 
    methods: {
      start() {
        const timer = setInterval(() => {
            this.num = this.counter;
            this.counter++;
            this.num++;
            this.$refs.line.style.width = this.num + "%";

            if( this.counter == 100 ){
                console.log( "여기?" );
                clearInterval( timer );
            }
        }, 50);

        this.loading = true;
      },
      finish() {
        this.counter = 0;
        this.num = 0;
        this.loading = false;
      },
    },
  }
</script>