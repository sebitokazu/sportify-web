<template>
    <v-card class="ma-lg-2 pa-lg-2 ma-md-4">
        <v-img
            class="white--text align-end"
            height="130px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-btn icon color="white" class="mb-md-8">
                <v-icon>visibility</v-icon>
            </v-btn>

            <v-card-title>{{excerciseName}}</v-card-title>
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
                    mdi-pencil
                </v-icon>
                Edit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "Excercise",
    props: {
        excerciseName: String
    }
};
</script>

<style scoped></style>
