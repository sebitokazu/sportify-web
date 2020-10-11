<template>
    <v-app>
        <v-main>
            <Routines />
        </v-main>
    </v-app>
</template>

<script>
//import NavBar from "./components/NavBar";
//import Welcome from "./views/Welcome";
//import LoginForm from "@/components/FormComponents/LoginForm";
//import Home from "./views/Home";
import Routines from "./views/Rutines";
//import RegisterForm from "@/components/FormComponents/RegisterForm";

export default {
    name: "App",

    components: {
        //NavBar,
        //Welcome,
        //LoginForm
        //RegisterForm
        //Home,
        Routines
    },

    data: () => ({})
};
</script>
