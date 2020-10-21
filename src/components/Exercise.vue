<template>
    <v-card class="ma-lg-2 pa-lg-2 ma-md-4" max-width="200" min-width="150">
        <v-img
            class="white--text align-end"
            height="130px"
            :src=image
        >
            <v-card-title class="accent--text">{{exerciseName}}</v-card-title>
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
