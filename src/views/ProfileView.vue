<template>
    <div>
        <NavBar />
        <v-main>
            <v-card class="mx-auto mt-6" max-width="600">
                <v-container>
                    <v-row align="center" justify="center">
                        <v-col cols="4">
                            <v-avatar class="profile" color="grey" size="150">
                                <v-img
                                    v-if="hasProfileImage"
                                    :src="getImage"
                                ></v-img>
                                <v-icon dark size="75" v-else
                                    >mdi-account-circle</v-icon
                                >
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="4">
                            <subtitle-2>User</subtitle-2>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
    name: "ProfileView",
    components: {
        NavBar
    },
    data: () => ({
        hasProfileImage: false
    })
};
</script>
