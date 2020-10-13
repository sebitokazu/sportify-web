import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/WelcomeView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import Profile from "../views/ProfileView.vue";
import NotFound from "../views/NotFoundView.vue";
//import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "WelcomeView",
        component: Welcome
    },
    {
        path: "/register",
        name: "RegisterView",
        component: Register
    },
    {
        path: "/login",
        name: "LoginView",
        component: Login
    },
    {
        path: "/home",
        name: "HomeView",
        component: Home
    },
    {
        path: "/profile",
        name: "ProfileView",
        component: Profile
    },
    {
        path: "*",
        name: "404",
        component: NotFound
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
/*router.beforeEach((to, from, next) => {
    if (!to.path.startsWith("/user")) next();
    else if (!store.isAuthenticated) next({ name: "LoginView" });
    else next();
});*/

export default router;
