<template>
    <v-container>
        <v-card color="background">
            <EditRoutine />
            <v-btn dark> Add cycle</v-btn>
            <v-expansion-panels>
                <v-expansion-panel
                    v-for="(value, name, i) in cycles"
                    :key="i"
                    class="background"
                >
                    <v-expansion-panel-header>
                        {{ name }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <cicle :exercises="value" />
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-textarea
                class="pa-6"
                outlined
                name="input-7-4"
                label="Detail"
                value="This Routine..."
            ></v-textarea>
            <v-card align="end" flat color="background">
                <v-btn
                    color="success"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                    Save
                </v-btn>
                <v-btn
                    color="error"
                    dark
                    class="mb-2 mx-2"
                    v-bind="attrs"
                    v-on="on"
                >
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

export default {
    name: "CreateRoutine",
    components: { Cicle, EditRoutine },

    data: () => ({
        cycles: routineStore.getCycles()
    })
};
</script>

<style scoped></style>
