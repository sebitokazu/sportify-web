<template>
    <v-card color="background">
        <v-card-title class="headline">
            {{ title }}
        </v-card-title>
        <v-card-subtitle class="pt-2">{{ detail }}</v-card-subtitle>

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
