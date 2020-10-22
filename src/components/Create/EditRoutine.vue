<template>
    <v-container class="pa-4">
        <v-row justify="space-between">
            <v-col cols="5">
                <v-text-field
                    label="Routine Name"
                    outlined
                    dense
                ></v-text-field>
            </v-col>

            <v-col cols="2">
                <v-container fluid class="mt-n6">
                    <v-row>
                        <v-icon class="pr-1">
                            alarm
                        </v-icon>
                        {{ totalTime }} "
                    </v-row>
                    <v-row>
                        <v-checkbox
                            v-model="checkbox"
                            label="Private"
                            color="success"
                        >
                        </v-checkbox>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="4">
                Difficulty:
                <v-rating
                    color="rating"
                    background-color="grey"
                    empty-icon="star"
                    full-icon="star"
                    hover
                    length="3"
                    value="3"
                ></v-rating>
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
