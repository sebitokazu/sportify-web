<template>
    <v-container fluid>
        <v-row>
            <v-col cols="5">
                <v-text-field
                    label="Routine Name"
                    outlined
                    v-model="routine.name"
                    dense
                ></v-text-field>
            </v-col>
            <v-col>
                <v-icon align>
                    alarm
                </v-icon>
                {{ totalTime }}
                mins
            </v-col>
            <v-col>
                <v-checkbox color="success" v-model="routine.isPublic">
                    <template v-slot:label>
                        <div>
                            Private
                        </div>
                    </template>
                </v-checkbox>
            </v-col>
            <v-col>
                <v-chip-group>
                    Difficulty:
                    <v-rating
                        color="rating"
                        background-color="grey"
                        empty-icon="local_fire_department"
                        full-icon="local_fire_department"
                        hover
                        length="3"
                        value="3"
                        v-model="difficulty"
                    ></v-rating>
                </v-chip-group>
            </v-col>
            <v-col>
                <v-select
                    :items="categories"
                    label="Category"
                    v-model="category"
                    dense
                    outlined
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import routineStore from "@/store/routineStore";
export default {
    name: "EditRoutine.vue",
    props: {},
    data: () => ({
        totalTime: "15",
        categories: [],
        category: "",
        difficulty: "",
        routine: routineStore.getRoutine()
    }),
    watch: {
        rating: function(val) {
            switch (val) {
                case 1:
                    this.routine.difficulty = "rookie";
                    break;
                case 2:
                    this.routine.difficulty = "advanced";
                    break;
                case 3:
                    this.routine.difficulty = "rookie";
                    break;
            }
        },
        category: function(val) {
            this.routine.id = val;
        }
    }
};
</script>

<style scoped></style>
