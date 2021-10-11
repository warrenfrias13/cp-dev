const page_root = ''

const route_builder = function(path = ""){
  return ( path != "" ) ? `${page_root}/${path}` : `${page_root}`
}

const ProductsList = () => import('./Modules/ProductsList/Index.vue');
const ProductDetails = () => import('./Modules/ProductDetails/Index.vue');

export const routes = [
  {
    path: route_builder(''),
    component: ProductsList
  },
  {
    path: route_builder(':country/:title'),
    component: ProductDetails
  },
]
