import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter);

export const basisRoutes = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    name: "login",
    meta: {
      hidden: true,
      affix: false,
    },
  },
  {
    path: "/",
    component: Layout,
    name: "index",
    meta: {
      hidden: false,
      affix: false,
    },
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "dashboard",
        },
      },
      {
        path: "/aaa",
        name: "aaa",
        component: () => import("../views/dashboard/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "aaa",
        },
      },
      {
        path: "categreg",
        name: "categreg",
        component: () => import("../views/home/index.vue"),
        meta: {
          hidden: false,
          affix: false,
          title: "多级菜单",
        },
        children: [
          {
            path: "/categregChild",
            name: "categregChild",
            component: () => import("../views/dashboard/index.vue"),
            meta: {
              hidden: false,
              affix: false, //是否固定在tagsview
              title: "三级菜单",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    component: () => import("../views/error-page/404.vue"),
    name: "404",
    meta: {
      hidden: true,
      affix: false,
    },
  },
  {
    path: "/401",
    component: () => import("../views/error-page/401.vue"),
    name: "401",
    meta: {
      hidden: true,
      affix: false,
    },
  },

  // {
  //   path: "*",
  //   redirect: "/404",
  //   name: "404",
  //   meta: {
  //     hidden: true,
  //     affix: false,
  //   },
  // },
];

export const asyncRoute = [
  {
    path: "/",
    component: Layout,
    name: "index",
    meta: {
      hidden: false,
      affix: false,
    },
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "dashboard",
        },
      },
      {
        path: "categreg",
        name: "categreg",
        component: () => import("../views/home/index.vue"),
        meta: {
          hidden: false,
          affix: false,
          title: "多级菜单",
        },
        children: [
          {
            path: "/categregChild",
            name: "categregChild",
            component: () => import("../views/dashboard/index.vue"),
            meta: {
              hidden: false,
              affix: false, //是否固定在tagsview
              title: "三级菜单",
            },
          },
        ],
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    name: "404",
    meta: {
      hidden: true,
      affix: false,
    },
  },
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    scrollBehavior: () => {
      {
        y: 0;
      }
    },
    routes: basisRoutes,
  });

const router = createRouter();

// export function resetRouter() {
//   const newRouter = createRouter();
//   router.matcher = newRouter.matcher; // reset router
// }

export default router;
