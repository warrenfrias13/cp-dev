<template>
  <div class="w-full">
    <div class="text-center uppercase tracking-widest text-blue-800 text-lg mb-5">
      Coda Payments Assignment - Warren Frias
    </div>
    <SearchBox />

    <div class="lg:w-3/4 mx-auto bg-white p-5 border border-gray-200">
      <div class="" v-bind:class="{'loading':(loading === true)}">
        <div class="donut"></div>
        <div class="flex flex-wrap w-full mx-auto spa">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SearchBox } from './components/SearchItems'

export default {
  name: 'App',
  components: {
    SearchBox,
  },
  computed: mapState(['loading'])
}
</script>
