<template>
    <v-container fluid>
        <v-row>
            <v-col cols="5">
                <v-text-field
                    label="Routine Name"
                    outlined
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
                <v-checkbox v-model="checkbox" color="success">
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
                    ></v-rating>
                </v-chip-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "EditRoutine.vue",
    data: () => ({
        totalTime: "15"
    })
};
</script>

<style scoped></style>
