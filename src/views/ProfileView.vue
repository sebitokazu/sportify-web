<template>
    <div>
        <NavBar />
        <v-main>
            <v-card class="mx-auto mt-6" max-width="250">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-avatar
                                id="avatar-img"
                                class="profile"
                                color="grey"
                                size="100"
                            >
                                <v-img
                                    v-if="hasProfileImage"
                                    :src="getImage"
                                >
                                </v-img>
                                <v-icon dark x-large v-else
                                    >mdi-account-circle</v-icon
                                >
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row justify="center" no-gutters>
                        <v-text-field
                            label="Username"
                            outlined
                            v-model="userName"
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                            outlined
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-text-field
                            label="E-mail"
                            outlined
                            v-model="email"
                        ></v-text-field>
                    </v-row>
                    <v-row
                        v-if="hasDescription"
                        justify="center"
                        no-gutters
                        class="my-n3"
                    >
                        <v-col cols="auto">
                            <v-card-subtitle>Edit profile</v-card-subtitle>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-main>
    </div>
</template>

<style scoped>
#avatar-img:hover > * {
    transform: scale(1.25);
}
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
    name: "ProfileView",
    components: {
        NavBar
    },
    data: () => ({
        show1: false,
        hasProfileImage: false,
        hasDescription: true,
        hasLocation: true,
        userName: "Sergio",
        email: "sergioperez@gmail.com",
        password: "Password",
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        }
    })
};
</script>
