<template>
    <v-card class="mx-auto" max-width="250">
        <v-card-title class="text--center">{{ title }}</v-card-title>

        <v-card-subtitle class="">
            {{ author }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <v-rating
                small
                length="5"
                readonly
                dense
                color="accent"
                :value="difficulty"
            ></v-rating>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" text right v-on="on" v-bind="attrs">
                        See more
                    </v-btn>
                </template>
                <RoutineCardDetailed
                    :title="title"
                    :detail="detail"
                    :description="description"
                    @dialog="dialog = false"
                />
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import RoutineCardDetailed from "./RoutineCardDetailed.vue";
export default {
    name: "RoutineCard",
    props: {
        title: {
            type: String
        },
        author: {
            type: String
        },
        description: {
            type: String
        },
        difficulty: {
            type: Number
        },
        detail: {
            type: String
        }
    },
    components: {
        RoutineCardDetailed
    },
    data: () => ({
        dialog: false
    })
};
</script>

<style></style>
