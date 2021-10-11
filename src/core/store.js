import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import products from '../products/products.json'

const SERVER_URL = `http://localhost:86/`

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
      server_exists: false,
      loading: false,
      current_product: {},
      products: []
    },

    mutations: {

      /* --------------------------- */

      showLoading(state, payload) {
        state.loading = payload
      },

      /* --------------------------- */

      setCurrentProduct(state, payload) {
        state.current_product = payload
      },

      /* --------------------------- */

      addProducts(state, payload) {
        var data = {}
        if(payload.reset === true){
          data = []
        } else {
          data = payload
        }
        state.products = data
        console.log("Added to state", state.products)
      },

      /* --------------------------- */

    },

    actions: {

      /* --------------------------- */

      ActionsGetAllProducts: () => {
        axios.get(`${SERVER_URL}get_products`)
             .then((response) => {
                    if(response.data.success && response.data.products){
                      console.log("API call response", response.data.products)
                      // context.commit('addProducts', response.data.products)
                    }
                 })
             .catch(error => {
                    console.log("Manage Error Here", error)
                  });
         },

      /* --------------------------- */

      ActionsGetSingleProduct: (context, url) => {
        axios.get(`${SERVER_URL}get_product_details${url}`)
             .then((response) => {
                    if(response.data.success && response.data.product_details){
                      context.commit('setCurrentProduct', response.data.product_details)
                    }
                 })
            .catch(error => {
                   console.log("Manage Error Here", error)
                 });
         },

      /* --------------------------- */

      ActionsLoadAllProducts: (context) => {
        context.commit('addProducts', products.products)
      },

      /* --------------------------- */

    },

    getters: {

      productDetails: (state) => (url) => {

      var current_product = {};

      // This expression is only written for this assignment. In a production env, only the first block will be used.
      // In the assignment, the products are loaded from a file.
      (state.server_exists)
        ?
      (function() {

        current_product = state.products.find(product => product.productUrl == url)
        if(current_product == null){
          console.log("Loading products from server")
          store.dispatch('ActionsGetSingleProduct', url)
        }

      })()
       :
      (function() {

        if(state.products.length == 0){
          console.log("Loading products from file")
          store.dispatch('ActionsLoadAllProducts')
        }

        current_product = state.products.find(product => product.productUrl == url)

      })()

      // Store the current product to be available to the Product Details Component.
      store.commit('setCurrentProduct', current_product)

      },

    }

})
