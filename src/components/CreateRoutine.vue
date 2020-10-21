<template>
    <v-container>
        <v-card>
            <EditRoutine />
            <v-expansion-panels>
                <v-expansion-panel
                    v-for="(item,i) in ciclos"
                    :key="i"
                >
                    <v-expansion-panel-header>
                        {{item}}
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
            <v-card align="end" flat>
                <v-btn
                    color="accent"
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
import Cicle from "@/components/Cicle";
import EditRoutine from "@/components/EditRoutine";

export default {
    name: "CreateRoutine",
    components: { Cicle, EditRoutine },
    data: () => ({
        ciclos: [
            'Warm up',
            'Training',
            'Streching'
        ],
    })
}
</script>

<style scoped>

</style>