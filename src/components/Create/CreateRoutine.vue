<template>
    <v-container>
        <v-card color="background">
            <EditRoutine />
            <FormAddCycle />
            <v-expansion-panels v-model="panel">
                <v-expansion-panel
                    v-for="(value, name, i) in cycles"
                    :key="i"
                    class="background"
                >
                    <v-expansion-panel-header>
                        {{ name }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <Cicle :exercises="value" />
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
        cycleName: "",
        routine: routineStore.getRoutine(),
        store: routineStore,
        panel: 0
    }),
    methods: {
        async saveRoutine() {
            const cycles = this.store.getCycles();
            const res = await RoutinesApi.addRoutine(this.store.getRoutine());
            const id = res.id;
            Object.values(cycles).forEach(async cycle => {
                let r = await RoutinesApi.addCycle(id, cycle);
                console.log(r);
                const cycleId = r.id;
                console.log(this.store.getCyclesExercisesByName(cycle.name));
                this.store
                    .getCyclesExercisesByName(cycle.name)
                    .forEach(async exercise => {
                        let q = await RoutinesApi.addExercise(
                            id,
                            cycleId,
                            exercise
                        );
                        console.log(q);
                    });
            });
        },
        getExercises(name) {
            return routineStore.getExerciseFromCycle(name);
        }
    },
    computed: {
        panel: function() {
            return this.store.getOpenCyclePanel;
        }
    }
};
</script>

<style scoped></style>
