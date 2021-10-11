import Vue from 'vue';
import VueRouter from 'vue-router';

import {routes as ProductRoutes} from "../pages/Product/";

Vue.use(VueRouter);

var allRoutes = []
allRoutes = allRoutes.concat(ProductRoutes)

const routes = allRoutes

export default new VueRouter({
  routes,
  mode: 'history'
})
