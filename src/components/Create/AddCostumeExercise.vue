<template>
    <div>
        <div class="d-flex justify-center mb-3">
            <FormAddExercise />
        </div>
        <v-responsive class="overflow-y-auto" max-height="800">
            <v-container>
                <v-row justify="center">
                    <v-col v-for="n in 3" :key="n" cols="4">
                        <v-row v-for="k in exercisesList" :key="k">
                            <Exercise
                                :exercise="k"
                            />
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-responsive>
    </div>
</template>

<script>
import Exercise from "@/components/Create/Exercise";
import FormAddExercise from "@/components/FormAddExercise";

export default {
    name: "AddCostumeExercise.vue",
    components: { Exercise, FormAddExercise },
    data: () => ({
        exercisesList: [
            {
                name: "Abdominales",
                image:
                    "https://media.mercola.com/ImageServer/Public/2020/January/Nonlead/abdominales.jpg",
                detail: "acostado hay que levantar el cuerpo",
                duration: 20,
                type: "exercise",
                repetitions: 1
            },
            {
                name: "Flexiones",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtd4_P6MVjpeSrslKWDNLYco1-gPf-PWpb0w&usqp=CAU",
                detail: "flexiones desde acostado hay que levantar el cuerpo",
                duration: 20,
                type: "exercise",
                repetitions: 1
            },
            {
                name: "Sentadillas",
                image:
                    "https://i2.wp.com/www.entrenamiento.com/wp-content/uploads/2019/08/diferencias-sentadilla-normal-sumo.jpg?ssl=1",
                detail: "Sentadillas acostado hay que levantar el cuerpo",
                duration: 20,
                type: "exercise",
                repetitions: 1
            },
            {
                name: "Estocadas",
                image:
                    "https://images.clarin.com/2018/06/26/SyqecHbG7_720x0__1.jpg",
                detail: "Estocadas acostado hay que levantar el cuerpo",
                duration: 20,
                type: "exercise",
                repetitions: 1
            },
            {
                name: "Espinales",
                image:
                    "https://i.pinimg.com/originals/cf/8a/1e/cf8a1e357d1138c1ff3ff9751b57127b.jpg",
                detail: "Espinales acostado hay que levantar el cuerpo",
                duration: 20,
                type: "exercise",
                repetitions: 1
            },
            {
                name: "Elongacion",
                image:
                    "https://rutinasentrenamiento.com/wp-content/uploads/ejercicios-de-elongacion-istock.jpg",
                detail: "Elongacion acostado hay que levantar el cuerpo",
                duration: 20,
                type: "exercise",
                repetitions: 1
            }
        ]
    })
};
</script>

<style scoped></style>
