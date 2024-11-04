import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/",
      name: "home",
      meta: {
        icon: "home",
        title: "Home",
      },
      component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
    },
  ],
});

export default router;
