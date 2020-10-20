<template>
    <div>
        <NavBar />
        <v-main>
            <v-container>
                <v-row class="mt-3 px-3" justify="center">
                    <v-col cols="10">
                        <v-text-field
                            v-model="searchText"
                            class="rounded-pill "
                            prepend-inner-icon="search"
                            label="Search"
                            outlined
                            clearable
                            @keydown.enter="search"
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-btn rounded color="accent" @click="search"
                            >Search</v-btn
                        >
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="start" class="py-5">
                    <v-col>
                        <v-text-area solo class="text-h6"
                            >Search results for '{{ this.resultText }}'
                        </v-text-area>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-responsive class="overflow-y-auto" max-height="800">
                            <template>
                                <v-row>
                                    <v-col
                                        v-for="rutina in listaRutinas"
                                        :key="rutina.id"
                                        cols="3"
                                    >
                                        <!-- Aca en realidad es mejor hacer un binding del json rutina-->
                                        <RoutineCard
                                            :title="rutina.name"
                                            :author="rutina.author"
                                            :description="rutina.description"
                                            :detail="rutina.detail"
                                            :difficulty="rutina.difficulty"
                                            :id="rutina.id"
                                        />
                                    </v-col>
                                </v-row>
                            </template>
                        </v-responsive>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import RoutineCard from "@/components/RoutineCard.vue";
export default {
    name: "SearchView",
    data: () => ({
        searchText: "",
        resultText: "",
        listaRutinas: [
            {
                name: "Rutinas",
                author: "Tommy",
                description: "Compliqueti",
                difficulty: 4
            },
            {
                name: "Rutinas",
                author: "Tommy",
                description: "Compliqueti",
                difficulty: 5
            },
            {
                name: "Rutinas",
                author: "Tommy",
                description: "Compliqueti",
                difficulty: 2
            },
            {
                name: "Rutinas",
                author: "Tommy",
                description: "Compliqueti",
                difficulty: 4
            }
        ],
        searchResult: undefined
    }),
    components: {
        NavBar,
        RoutineCard
    },
    methods: {
        search() {
            console.log(this.searchText);
            this.resultText = this.searchText;
            //this.searchResult=fetchblabl
        }
    },
    computed: {}
};
</script>

<style></style>
