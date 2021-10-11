<template>
  <div class="">
    <div v-if="products && products.length > 0" class="w-full md:flex md:flex-wrap md:content-start">
      <div  v-for="product in products" v-bind:key="product.id" class="inline-block w-full md:w-1/2 lg:w-1/3 mb-16">
        <ProductListItem v-bind:details="product" />
      </div>
    </div>
    <div v-else>
      No Products Found
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import ProductListItem from './ProductListItem'

  export default {
  name: 'ProductList',
    data(){
      return {
        key: ''
      }
    },

    /* ------------------------------------------------------------------ */

    components: {
        ProductListItem
    },

     /* ------------------------------------------------------------------ */

    methods: {

      /* --------------------------- */

      getProducts(){

        this.$store.commit('showLoading', true)

        /*
        If we have a server
        this.ActionsGetAllProducts()
         */

        this.ActionsLoadAllProducts()
        this.$store.commit('showLoading', false)

      },

      /* --------------------------- */

      ...mapActions(['ActionsGetAllProducts', 'ActionsLoadAllProducts'])

      /* --------------------------- */

   },

   /* ------------------------------------------------------------------ */

   mounted(){

     if(this.products.length == 0){
        this.getProducts()
     }

   },

   /* ------------------------------------------------------------------ */

   computed: mapState(['products'])


  }
</script>
