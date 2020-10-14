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
                                ></v-img>
                                <v-icon dark x-large v-else
                                    >mdi-account-circle</v-icon
                                >
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row justify="center" no-gutters>
                        <v-col cols="auto">
                            <v-card-title>Username</v-card-title>
                        </v-col>
                    </v-row>
                    <v-row
                        v-if="hasDescription"
                        justify="center"
                        no-gutters
                        class="my-n3"
                    >
                        <v-col cols="auto">
                            <v-card-subtitle>Description</v-card-subtitle>
                        </v-col>
                    </v-row>
                    <v-row
                        v-if="hasLocation"
                        justify="center"
                        no-gutters
                        class="my-n3"
                    >
                        <v-col cols="auto">
                            <v-card-text>
                                <v-icon>place</v-icon>Location
                            </v-card-text>
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
        hasProfileImage: false,
        hasDescription: true,
        hasLocation: true
    })
};
</script>
