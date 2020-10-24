<template>
    <v-main>
        <v-parallax
            dark
            src="@/assets/logo_rosa.png" class="bg"
                height="850"
        >
<!--            src="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_1280.jpg"-->

            <v-container>
                <v-row align="center" justify="up">
                    <v-col class="text-center" cols="12">
                        <h1 class="display-1">
                            Welcome!
                        </h1>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-7">
                    <v-col cols="2" class="ml-16">

                    </v-col>
                </v-row>
                <v-row justify="center" no-gutters>
                    <v-col :xl="6" :lg="6" :md="6" :sm="10" cols="10">
                        <v-textarea
                            filled
                            readonly
                            auto-grow
                            :value="message"
                            dark
                        ></v-textarea>
                    </v-col>
                    <v-col :xl="6" :lg="6" :md="6" :sm="10" cols="10">
                        <v-row justify="center" no-gutters class="mt-6">
                            <v-btn
                                color="primary"
                                width="33%"
                                to="register"
                                >Get started</v-btn
                            >
                        </v-row>
                        <v-row justify="center" no-gutters class="mt-6">
                            <v-btn
                                outlined
                                color="primary"
                                width="33%"
                                to="/login"
                                >Sign in</v-btn
                            >
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
    </v-main>
</template>

<script>
export default {
    name: "WelcomeView",
    components: {},
    data: () => ({
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    })
};
</script>
