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
                    <v-card
                        min-width="250"
                        max-width="350"
                        elevation="3"
                        class="pb-6"
                    >
                        <v-card-title>Register</v-card-title>
                        <v-form
                            v-model="valid"
                            ref="registerForm"
                            class="px-4 "
                        >
                            <FormEmail />
                            <FormUsername />
                            <FormPassword />
                            <v-card-actions>
                                <FormInput
                                    text="Sign Up"
                                    :valid="valid"
                                    to="/home"
                                />
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import FormEmail from "@/components/FormComponents/FormEmail";
import FormUsername from "@/components/FormComponents/FormUsername";
import FormPassword from "@/components/FormComponents/FormPassword";
import FormInput from "@/components/FormComponents/FormInput";

export default {
    name: "RegisterView",
    data: () => ({
        valid: false
    }),
    components: {
        FormEmail,
        FormUsername,
        FormPassword,
        FormInput
    }
};
</script>
