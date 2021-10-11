<template>
	<div class="lg:w-3/4 mx-auto mt-3">
		<form @submit.prevent="search()">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="search" role="presentation" class="fill-current absolute search-icon-center mt-4 ml-3 text-80 text-white">
				<path fill-rule="nonzero" d="M14.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
			</svg>
			<input type="search" v-model="search_keyword" autocomplete="off" placeholder="Search Product Name Here" @focus="preSearchChecks()" @keyup="searchProducts()" class="w-full p-3 pl-10 text-white outline-none bg-blue-800" />
		</form>
		<div v-if="show_search_results && search_results.length > 0" class="relative">
			<div class="w-full absolute bg-blue-800 p-5 top-0">
				<span class="absolute right-0 top-0 mr-5 mt-3 text-white font-bold text-lg inline-block cursor-pointer" @click="toggleSearchResults(false)">X</span>

				<div v-for="product in search_results" v-bind:key="product.id" class="border-b border-blue-700" @click="setStoreCurrentProduct(product.productUrl)">
					<router-link :to="{ path: `${product.productUrl}` }" class="block text-sm ml-2 text-gray-800 py-4 hover:bg-blue-900">
						<div class="flex">
							<div class="">
								<img v-bind:src="product.logoLocation" class="inline-block w-24" />
							</div>
							<div class="text-white ml-5 tracking-wider">
								<div class="text-lg">
									{{ product.name }}
								</div>
								<div class="text-sm">
									{{ product.productTagline }}
								</div>
							</div>
						</div>
					</router-link>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
  export default {
		name: 'SearchBox',
		data(){
			return {
				search_keyword: null,
				show_search_results: false,
				search_results: []
			}
		},

		/* ------------------------------------------------------------------ */

		methods: {
			
			setStoreCurrentProduct(url){
				this.$store.getters.productDetails(url)
				this.toggleSearchResults(false)
			},

			/* --------------------------- */

			preSearchChecks(){

				if(this.products.length == 0){
					this.ActionsLoadAllProducts()
				}

				if(this.search_keyword.length > 1){
					this.searchProducts()
				}

			},

			/* --------------------------- */

			searchProducts(){


				if(this.search_keyword.length > 1){
					this.show_search_results = true
					this.search_results = []

					var keyword = this.search_keyword.toLowerCase()

					this.products.map(product => {

						if(product.name.toLowerCase().indexOf(keyword) >= 0){
							this.search_results.push(product)
						}

					})
				} else if(this.search_keyword.length == 0){
					this.show_search_results = false
				}
			},

			/* --------------------------- */

			toggleSearchResults(view = true){
				this.show_search_results = view
			},

			/* --------------------------- */

			...mapActions(['ActionsGetAllProducts', 'ActionsLoadAllProducts'])

		},

		/* ------------------------------------------------------------------ */

		computed: mapState([
     'products'
    ])

  }
</script>
