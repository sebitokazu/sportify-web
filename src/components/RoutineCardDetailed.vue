<template>
    <v-card>
        <v-card-title class="headline">
            {{ title }}
        </v-card-title>

        <v-card-subtitle>{{ detail }}</v-card-subtitle>

        <v-card-text>
            <div>{{ description }}</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeDialog">
                Close
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "RoutineCardDetailed",
    props: {
        title: {
            type: String
        },
        detail: {
            type: String
        },
        description: {
            type: String
        }
    },
    methods: {
        closeDialog() {
            this.$emit("dialog");
        }
    }
};
</script>

<style></style>
