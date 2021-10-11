import { createRouter, createWebHashHistory } from "vue-router";

import Layout from '@/views/Layout'
const routes = [
  {
    path: "/",
    redirect: "login",
    hidden:true,
    meta:{
      name:"主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden:true,
    meta:{
      name:"登录"
    },
    component: Layout,
  },
  {
    path: "/console",
    name: "Console",
    meta:{
      name:"控制台",
      icon:"icon_tool"
    },
    redirect: "index",
    component: Layout,
    children:[
      {
        path:"/index",
        name:"Index",
        meta:{
          name:"首页",
        },
        component: () => import("../views/Console/index.vue"),
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta:{
      name:"信息管理",
      icon:"icon_guest_type"
    },
    component: Layout,
    children:[
      {
        path:"/infoIndex",
        name:"InfoIndex",
        meta:{
          name:"信息列表"
        },
        component: () => import("../views/Info/index.vue"),
      },
      {
        path:"/indexCategory",
        name:"IndexCategory",
        meta:{
          name:"信息分类"
        },
        component: () => import("../views/Info/category.vue"),
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta:{
      name:"用户管理",
      icon:"icon_card"

    },
    component: Layout,
    children:[
      {
        path:"/userIndex",
        name:"UserIndex",
        meta:{
          name:"用户列表"
        },
        component: () => import("../views/User/index.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
