import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/frontend-mentor-space-tourism/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destinations/:name",
    name: "Destinations",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Destination/Destination.vue"
      ),
  },
  {
    path: "/frontend-mentor-space-tourism/technology/:name",
    name: "Technology",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Technology/Technology.vue"
      ),
  },
  {
    path: "/frontend-mentor-space-tourism/crew/:name",
    name: "Crew",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Crew/Crew.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
