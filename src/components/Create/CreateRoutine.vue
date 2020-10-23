<template>
    <v-container>
        <v-card color="background">
            <EditRoutine />
            <FormAddCycle />
            <v-divider></v-divider>
            <v-expansion-panels hover flat>
                <v-expansion-panel
                    v-for="(value, name, i) in cycles"
                    :key="i"
                    class="background"
                >
                    <v-expansion-panel-header>
                        {{ name }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <Cicle :exercises="value" :name="name" />
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-textarea
                class="pa-6"
                outlined
                name="input-7-4"
                label="Detail"
                value="This Routine..."
                v-model="routine.detail"
            ></v-textarea>
            <v-card align="end" flat color="background">
                <v-btn color="success" dark class="mb-2" @click="saveRoutine">
                    Save
                </v-btn>
                <v-btn color="error" dark class="mb-2 mx-2">
                    Cancel
                </v-btn>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
import Cicle from "@/components/Create/Cicle";
import EditRoutine from "@/components/Create/EditRoutine";
import routineStore from "@/store/routineStore";
import FormAddCycle from "@/components/Create/FormAddCycle";
import { RoutinesApi } from "@/api/routines";

export default {
    name: "CreateRoutine",
    components: { Cicle, EditRoutine, FormAddCycle },

    data: () => ({
        cycles: routineStore.getExercisesCycleMap(),
        dialog: false,
        routine: routineStore.getRoutine(),
        store: routineStore
    }),
    methods: {
        async saveRoutine() {
            /*
            if(create)
            else //update
            */
            this.createRoutine();
        },
        async createRoutine() {
            const cycles = this.store.getCycles();
            const res = await RoutinesApi.addRoutine(this.store.getRoutine());
            const routineId = res.id;
            Object.values(cycles).forEach(cycle => {
                this.createCycle(routineId, cycle);
            });
        },
        async createCycle(routineId, cycle) {
            const res = await RoutinesApi.addCycle(routineId, cycle);
            const cycleId = res.id;
            this.store
                .getCyclesExercisesByName(cycle.name)
                .forEach((exercise, idx) => {
                    exercise.order = idx;
                    this.createExercise(routineId, cycleId, exercise);
                });
        },
        createExercise(routineId, cycleId, exercise) {
            RoutinesApi.addExercise(routineId, cycleId, exercise);
        },
        async updateRoutine() {}
    }
};
</script>

<style scoped></style>
