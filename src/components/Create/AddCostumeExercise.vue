<template>
    <v-responsive class="overflow-y-auto" max-height="800">
        <template>
            <v-row>
                <FormAddExercise />
            </v-row>
            <v-row>
                <v-col v-for="n in 3" :key="n" cols="4">
                    <v-row v-for="k in exercisesList" :key="k">
                        <Exercise :exercise-name=k.exerciseName :image=k.image />
                    </v-row>
                </v-col>
            </v-row>
        </template>
    </v-responsive>
</template>

<script>
import Exercise from "@/components/Create/Exercise";
import FormAddExercise from "@/components/FormAddExercise";

export default {
    name: "AddCostumeExercise.vue",
    components: { Exercise, FormAddExercise },
    data:() => ({
        exercisesList: [
            {
                exerciseName: "Abdominales",
                image:
                    "https://media.mercola.com/ImageServer/Public/2020/January/Nonlead/abdominales.jpg"
            },
            {
                exerciseName: "Flexiones",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtd4_P6MVjpeSrslKWDNLYco1-gPf-PWpb0w&usqp=CAU"
            },
            {
                exerciseName: "Sentadillas",
                image:
                    "https://i2.wp.com/www.entrenamiento.com/wp-content/uploads/2019/08/diferencias-sentadilla-normal-sumo.jpg?ssl=1"
            },
            {
                exerciseName: "Estocadas",
                image:
                    "https://images.clarin.com/2018/06/26/SyqecHbG7_720x0__1.jpg"
            },
            {
                exerciseName: "Espinales",
                image:
                    "https://i.pinimg.com/originals/cf/8a/1e/cf8a1e357d1138c1ff3ff9751b57127b.jpg"
            },
            {
                exerciseName: "Elongacion",
                image:
                    "https://rutinasentrenamiento.com/wp-content/uploads/ejercicios-de-elongacion-istock.jpg"
            }
        ]
    })
}
</script>

<style scoped>

</style>