<template>
    <v-responsive class="overflow-y-auto" max-height="800">
        <template>
            <v-row>
                <v-btn color="primary" text>
                    <v-icon small class="mr-2">
                        add
                    </v-icon>
                    Add costume excercise
                </v-btn>
            </v-row>
            <v-row>
                <v-col v-for="n in 3" :key="n" cols="4">
                    <v-row v-for="k in listaEjercicios" :key="k">
                        <Excercise excercise-name="Estocadas" />
                    </v-row>
                </v-col>
            </v-row>
        </template>
    </v-responsive>
</template>

<script>
import Excercise from "@/components/Exercise";

export default {
    name: "AddCostumeExercise.vue",
    components: { Excercise },
    data:() => ({
        listaEjercicios: ['Estocadas', 'Flexiones', 'Abdominales', 'Sentadillas'],
    })
}
</script>

<style scoped>

</style>