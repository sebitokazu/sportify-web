<template>
    <div>
        <NavBar />
        <v-main>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-12 .col-sm-6 .col-md-8
                    </v-card>
                    <v-divider
                        inset
                        vertical
                    ></v-divider>
                </v-col>

                <v-col
                    cols="6"
                    md="6"
                >
                    <template>
                        <v-row>
                            <v-btn
                                color="primary"
                                text
                            >
                                <v-icon small class="mr-2">
                                    add
                                </v-icon>
                                Add costume excercise
                            </v-btn>
                        </v-row>
                        <v-row>
                            <v-col
                                v-for="n in 4"
                                :key="n"
                                cols="12"
                                sm="3"
                            >
                                <v-card
                                    class="pa-2"
                                    outlined
                                    tile
                                >
                                    <v-row v-for="n in 3"
                                           :key="n">
                                            <Excercise/>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </template>

                </v-col>
            </v-row>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Excercise from "@/components/Excercise";

export default {
    name: "NewRoutines",
    components: { NavBar, Excercise},
};
</script>

<style scoped></style>