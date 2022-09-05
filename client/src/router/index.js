import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
import PriorityView from "@/views/PriorityView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    // component: HomeView,
    component: PriorityView,
  },
  {
    path: "/priority",
    name: "priority-vote",
    component: () => import("@/views/PriorityView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
