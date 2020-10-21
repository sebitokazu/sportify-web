<template>
    <v-container>
        <v-card color="background">
            <EditRoutine />
            <v-expansion-panels>
                <v-expansion-panel
                    v-for="(item, i) in ciclos"
                    :key="i"
                    class="background"
                >
                    <v-expansion-panel-header>
                        {{ item }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <cicle />
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

export default {
    name: "CreateRoutine",
    components: { Cicle, EditRoutine },
    data: () => ({
        ciclos: ["Warm up", "Training", "Streching"]
    })
};
</script>

<style scoped></style>
