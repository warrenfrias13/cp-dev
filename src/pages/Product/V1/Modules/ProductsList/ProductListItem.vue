<template>
  <div class="bg-gray-100 rounded border-3 border-blue-800 hover:shadow-xl mx-3">
    <div class="p-5">
      <router-link :to="{ path: `${details.productUrl}` }" class="block text-sm ml-2 text-gray-800">
        <div class="align-top text-xl text-bold mb-3 text-blue-800">
          {{ details.name }}
        </div>
        <div class="h-1 bg-gray-300 mb-5"></div>

        <img v-bind:src="details.logoLocation" class="w-full" />

        <div class="align-top text-lg mt-5 text-blue-800 p-2 h-16 border-b border-gray-200 pb-3 mb-3">
          {{ details.productTagline }}
        </div>
      </router-link>
      <router-link :to="{ path: `${details.productUrl}` }" class="inline-block text-sm ml-2 bg-blue-800 text-white uppercase tracking-widest px-3 py-2 text-md ml-3 mt-2">
        See Details
      </router-link>
      <div v-html="details.shortDescription" class="align-top text-sm mt-5 text-blue-800 px-3 text-base"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ProductListItem',
    props: ['details']
  }
</script>
