import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/crowded",
    component: () => import("@/pages/crowded.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/pages/404.vue"),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
