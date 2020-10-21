<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" align-self="start">
                    <v-btn fab text @click="$router.back()">
                        <v-icon>arrow_back</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="4">
                    <v-card min-width="250" max-width="350" elevation="3">
                        <v-card-title>Login</v-card-title>
                        <v-form v-model="valid" ref="loginForm" class="px-4 ">
                            <v-text-field
                                v-model="username"
                                label="Username"
                                prepend-inner-icon="person"
                                :rules="rulesUsername"
                                filled
                                shaped
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="password"
                                label="Password"
                                prepend-inner-icon="lock"
                                :type="show ? 'text' : 'password'"
                                :append-icon="show ? 'visibility' : 'visibility_off'"
                                :rules="rulesPassword"
                                filled
                                shaped
                                :hint="rulesPassword ? 'It looks nice!' : 'At least 8 characters'"
                                @click:append="show = !show"
                                required
                            >
                            </v-text-field>
                            <h3 v-if="invalidCredentials" >Invalid credentials, please try again.</h3>
                            <v-container class="">
                                <v-row no-gutters>
                                    <v-col align="end">
                                        <v-btn
                                            @click="login"
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
                                        <v-btn
                                            class="mx-auto"
                                            color="purple lighten-2"
                                            depressed
                                            :disabled="!valid"
                                            type="submit"
                                            to="/home"
                                            @click="login"
                                        >
                                            Sign In
                                        </v-btn>
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
import {UserApi, Credentials} from "@/api/user";



export default {
    name: "LoginView",
    data: () => ({
        valid: false,
        invalidCredentials: true,
        username: "",
        rulesUsername: [value => !!value || "Username is required"],
        password: "",
        show: false,
        rulesPassword: [
            value => !!value || "Password is required",
            value => {
                const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
                return (
                    pattern.test(value) ||
                    "Min. 8 characters with at least one capital letter, a number and a special character."
                );
            }
        ]
    }),
    components: {
    },
    methods: {
        async login() {

            let credentials = new Credentials(this.username,this.password);
            try{
                console.log(credentials);
                let response = await UserApi.login(credentials);
                console.log(response);
                if(response.data().code === 4)
                    this.invalidCredentials++;
            }
            catch(error){
                console.log(error)
            }

        }
    }
};
</script>

<style></style>
