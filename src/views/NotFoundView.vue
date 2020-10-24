<template>
    <v-main class="bg">
        <!-- <v-img src="@/assets/restingman.jpg" class="bg"> -->
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-img
                        alt="Vuetify Logo"
                        contain
                        src="@/assets/logo_botella2.png"
                        transition="scale-transition"
                        width="100%"
                    />
                </v-col>
            </v-row>
            <v-row align="center" class="pt-15" style="y:100%;">
                <v-col cols="8" align="middle">
                    <h1 class="font-weight-black" color="">
                        Error 404: Page not found
                    </h1>
                    <h3>
                        Take a short break!
                    </h3>
                    <div class="mt-4">
                        <v-btn
                            v-if="store.isAuthenticated"
                            to="/home"
                            color="primary"
                        >
                            Back to home
                        </v-btn>
                        <v-btn v-else to="/" color="primary">
                            <v-icon left>
                                arrow_back
                            </v-icon>
                            Back to main</v-btn
                        >
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <!-- </v-img> -->
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
/* .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
} */
/* .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../assets/restingman.jpg");
    background-size: cover;
} */
</style>
