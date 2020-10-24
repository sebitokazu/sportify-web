<template>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
                color="primary"
                class="background--text ml-4 mt-3"
                elevation="2"
            >
                <v-icon small class="mr-2"> add </v-icon>
                New exercise
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Create a new exercise</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field
                        label="Exercise name"
                        v-model="name"
                    ></v-text-field>
                    <v-textarea
                        label="Detail"
                        v-model="detail"
                        class="mb-3"
                    ></v-textarea>
                    <v-slider
                        label="Repetitions"
                        v-model="repetitions"
                        :thumb-size="24"
                        thumb-label="always"
                        :max="150"
                    ></v-slider>
                    <v-slider
                        label="Seconds"
                        v-model="duration"
                        step="5"
                        :thumb-size="24"
                        thumb-label="always"
                        :max="480"
                    ></v-slider>
                    <v-select
                        :items="items"
                        label="Type"
                        v-model="type"
                        dense
                        outlined
                    ></v-select>
                    <v-card-actions>
                        <v-btn class="error" @click="dialog = false"
                            >Cancel</v-btn
                        >
                        <v-btn @click="addExercise" class="success"
                            >Add exercise</v-btn
                        >
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { RoutinesApi } from "@/api/routines";
import { UserApi } from "@/api/user";

export default {
    name: "FormAddExercise.vue",
    data() {
        return {
            name: "",
            detail: "",
            checkbox: false,
            repetitions: "",
            duration: "",
            type: "",
            dialog: false,
            items: ["exercise", "rest"],
            godRoutineId: 1,
            godCycleId: 1
        };
    },
    async beforeMount() {
        const ids = await UserApi.getCurrentUserGodIds();
        this.godRoutineId = ids[0];
        this.godCycleId = ids[1];
    },
    methods: {
        async addExercise() {
            this.dialog = false;
            let exercise = {
                name: this.name,
                detail: this.detail,
                type: this.type,
                duration: this.duration,
                repetitions: this.repetitions
            };
            await RoutinesApi.addExercise(
                this.godRoutineId,
                this.godCycleId,
                exercise
            );
        }
    }
};
</script>

<style scoped></style>
