<template>
    <div>
        <div class="d-flex justify-center mb-3">
            <FormAddExercise @confirm="initialize" />
        </div>
        <v-responsive class="overflow-y-auto" max-height="800">
            <v-container>
                <v-row>
                    <v-col cols="4" v-for="k in exercisesList" :key="k">
                        <Exercise :exercise="k" />
                    </v-col>
                </v-row>
            </v-container>
        </v-responsive>
    </div>
</template>

<script>
import Exercise from "@/components/Create/Exercise";
import FormAddExercise from "@/components/FormAddExercise";
import { RoutinesApi } from "@/api/routines";
import { UserApi } from "@/api/user";

export default {
    name: "AddCostumeExercise.vue",
    components: { Exercise, FormAddExercise },
    data: () => ({
        exercisesList: [],
        godRoutineId: 1,
        godCycleId: 1
    }),
    async beforeMount() {
        const ids = await UserApi.getCurrentUserGodIds();
        this.godRoutineId = ids[0];
        this.godCycleId = ids[1];
    },
    async created() {
        await this.initialize();
    },
    methods: {
        async initialize() {
            let response = await RoutinesApi.getExercises(1, 1);
            this.exercisesList = response.results;
            response = await RoutinesApi.getExercises(
                this.godRoutineId,
                this.godCycleId
            );
            this.exercisesList = { ...this.exercisesList, ...response.results };
        }
    }
};
</script>

<style scoped></style>
