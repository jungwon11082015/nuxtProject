export default {
    methods: {
      handleScroll () {
        // console.log(window.scrollY)
      }
    },
    created () {
        if (process.client) { 
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed () {
        if (process.client) { 
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
 }