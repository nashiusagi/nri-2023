import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/crowded",
    component: () => import("@/pages/crowded.vue"),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
