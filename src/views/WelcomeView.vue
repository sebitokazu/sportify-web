<template>
    <v-main class="secondary">
        <v-parallax
            dark
            src="@/assets/SportifyMailing.jpg" class="bg"
            height="850"
        >
            <!--            src="https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_1280.jpg"-->

            <v-container>
                <v-row>
                    <v-container class="pt-16"></v-container>
                    <v-container class="pt-16"></v-container>
                </v-row>
                <v-row justify="center" no-gutters class="pt-16">
                    <v-col :xl="6" :lg="6" :md="6" :sm="10" cols="10">
                        <v-textarea
                            filled
                            readonly
                            auto-grow
                            class="primary"
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
            "Welcome to Sportify! With us, you can show your amazing routines to many people outside there!\nExplore other trainers routines too and improve your knowledge about exercising! "
    })
};
</script>
