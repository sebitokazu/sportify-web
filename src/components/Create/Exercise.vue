<template>
    <v-card class="ma-lg-2 pa-lg-2 ma-md-4" max-width="200" min-width="150" color="background">
        <v-img
            class="white--text align-end"
            height="130px"
            :src=image
        >
            <v-card-title class="primary--text py-1 pl-2" style="background-color:rgba(253, 255, 242, 0.5);">{{exerciseName}}</v-card-title>
        </v-img>
        <v-card-actions>
            <v-row>
                <v-btn color="primary" text>
                    <v-icon small class="mr-2">
                        add
                    </v-icon>
                    Add
                </v-btn>
            </v-row>
            <v-btn color="primary" text>
                <v-icon small class="mr-2">
                    visibility
                </v-icon>
                See
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "Exercise",
    props: {
        exerciseName: String,
        image: String
    }
};
</script>

<style scoped></style>
