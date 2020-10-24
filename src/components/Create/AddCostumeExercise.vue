<template>
    <div>
        <div class="d-flex justify-center mb-3">
            <FormAddExercise @confirm="initialize" />
        </div>
        <v-responsive class="overflow-y-auto" max-height="800">
            <v-container>
                <template v-if="loader">
                    <v-row>
                        <v-col cols="4" v-for="i in 6" :key="i">
                            <v-skeleton-loader
                                type="article,actions"
                                max-height="200"
                            ></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </template>
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
        godCycleId: 1,
        loader: false
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
            this.loader = true;
            let response = await RoutinesApi.getExercises(1, 1);
            let responseGod = await RoutinesApi.getExercises(
                this.godRoutineId,
                this.godCycleId
            );
            this.exercisesList = {
                ...responseGod.results,
                ...response.results
            };
            this.loader = false;
        }
    }
};
</script>

<style scoped></style>
