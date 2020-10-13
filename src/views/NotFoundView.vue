<template>
    <v-main>
        <v-img src="@/assets/restingman.jpg" class="bg">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <v-img
                            alt="Vuetify Logo"
                            contain
                            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                            transition="scale-transition"
                            width="80"
                            height="130"
                        />
                    </v-col>
                </v-row>
                <v-row align="center" class="pt-15" style="y:100%;">
                    <v-col cols="8" align="middle">
                        <h1 class="font-weight-black">
                            Error 404: Page not found
                        </h1>
                        <subtitle-1 style="color:white;"
                            >Take a break and then go back to
                            <router-link v-if="store.isAuthenticated" to="/home"
                                >home</router-link
                            >
                            <router-link v-else to="/">main</router-link>
                        </subtitle-1>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </v-main>
</template>

<script>
import store from "@/store";

export default {
    name: "404",
    data: () => ({
        store: store
    })
};
</script>
<style scoped>
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
}
.v-application a {
    color: white;
    font-weight: 700;
}
</style>
