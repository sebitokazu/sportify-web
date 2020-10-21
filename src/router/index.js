import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/WelcomeView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import Profile from "../views/ProfileView.vue";
import NotFound from "../views/NotFoundView.vue";
//import store from "../store";
import MyRoutines from "../views/MyRoutines.vue";
import NewRoutines from "../views/NewRoutines.vue";
import SearchView from "../views/SearchView.vue";
import {Api} from "@/api/api";

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
        path: "/myroutines",
        name: "MyRoutines",
        component: MyRoutines
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
        path: "/newroutines",
        name: "NewRoutines",
        component: NewRoutines
    },
    {
        path: "/search",
        name: "SearchView",
        component: SearchView
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

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/register', '/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = Api.token;

    if(authRequired && !loggedIn){
        next('/login');
    }else{
        next();
    }

});

export default router;
