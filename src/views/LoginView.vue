<template>
    <v-main>
        <v-container>
            <v-row justify="center" class="mt-7">
                <v-col cols="4">
                    <v-card min-width="250" max-width="350" elevation="3">
                        <v-card-title>Login</v-card-title>
                        <v-form v-model="valid" ref="loginForm" class="px-4 ">
                            <FormUsername />
                            <FormPassword class="mb-n4" />
                            <v-container class="">
                                <v-row no-gutters>
                                    <v-col align="end">
                                        <v-btn
                                            class="mb-3"
                                            text
                                            x-small
                                            color="blue"
                                        >
                                            Forgot your password?
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-container class="mt-n4">
                                    <v-row>
                                        <FormInput
                                            text="Sign In"
                                            :valid="valid"
                                            to="/home"
                                        />
                                    </v-row>
                                    <v-row>
                                        <v-divider
                                            class="mt-3 mb-2"
                                        ></v-divider>
                                    </v-row>
                                    <v-row>
                                        <v-btn
                                            text
                                            class="mx-auto"
                                            color="purple lighten-2"
                                            to="/register"
                                        >
                                            Sign Up
                                        </v-btn>
                                    </v-row>
                                </v-container>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import FormUsername from "@/components/FormComponents/FormUsername";
import FormPassword from "@/components/FormComponents/FormPassword";
import FormInput from "@/components/FormComponents/FormInput";

export default {
    name: "LoginView",
    data: () => ({
        valid: false
    }),
    components: {
        FormUsername,
        FormPassword,
        FormInput
    }
};
</script>

<style></style>
