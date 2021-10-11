const page_root = ''

const route_builder = function(path = ""){
  return ( path != "" ) ? `${page_root}/${path}` : `${page_root}`
}

const Dashboard = () => import('./Modules/Dashboard/Index.vue');
const Page = () => import('./Modules/Template/Index.vue');


export const routes = [
  {
    path: route_builder(),
    component: Dashboard
  },
  {
    path: route_builder('page'),
    component: Page
  },
]

export const menu = {
  title: "Template",
  items: [
    {
      path: route_builder(),
      title: "Template Dashboard"
    },
    {
      path: route_builder('page'),
      title: "Template Page"
    },
  ]
}
