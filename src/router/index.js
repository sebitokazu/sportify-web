import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/WelcomeView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import MyRoutines from "../views/MyRoutines.vue";
import NewRoutines from "../views/NewRoutines.vue";

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
        path: "/newroutines",
        name: "NewRoutines",
        component: NewRoutines
    }

    /* {
        path: "*",
        component: NotFoundView
    }*/
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
