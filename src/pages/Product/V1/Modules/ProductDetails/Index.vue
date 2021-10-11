<template>
  <div class="">

  <div class="mb-5">
    <router-link to="/" class="inline-block bg-pink-500 text-white uppercase tracking-widest px-3 py-2 text-sm">
      &laquo; Back to All products
    </router-link>
  </div>

  <div v-if="current_product">
    <div  class="w-full">

      <div class="align-top text-2xl text-bold mb-3 text-blue-800">
        {{ current_product.name }}
      </div>
      <div class="align-top text-base text-blue-800 mb-4">
        {{ current_product.productTagline }}
      </div>
      <div class="mb-5">
        <span class="bg-gray-200 text-blue-800 p-2 rounded">
          {{ current_product.voucherTypeName }}
        </span>
      </div>
      <div class="h-1 bg-gray-300 mb-5  w-3/4"></div>

      <img v-bind:src="current_product.logoLocation" class="w-3/4" />

      <div v-html="current_product.shortDescription" class="w-3/4 justify align-top text-sm mt-5 text-blue-800 px-1 text-base"></div>

    </div>
  </div>

  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Page',
    data(){
      return {
        url: `/${this.$route.params.country}/${this.$route.params.title}`
      }
    },

    /* ------------------------------------------------------------------ */

    methods: {

      /* --------------------------- */

      ...mapActions(['ActionsLoadAllProducts'])

      /* --------------------------- */



   },

   /* ------------------------------------------------------------------ */

   mounted(){

     this.$store.getters.productDetails(this.url)

   },

   /* ------------------------------------------------------------------ */

   computed: mapState([
    'current_product'
   ])

   /* ------------------------------------------------------------------ */

  }
</script>
