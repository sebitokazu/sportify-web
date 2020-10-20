<template>
    <div>
        <NavBar />
        <v-main>
            <v-container>
                <v-row justify="start" class="py-5">
                    <v-col>
                        <v-text-area solo class="text-h4">
                            Check all the routines
                        </v-text-area>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-responsive class="overflow-y-auto" max-height="800">
                            <template v-if="loading">
                                <v-row>
                                    <v-col cols="3" v-for="i in 4" :key="i">
                                        <v-skeleton-loader
                                            type="article,actions"
                                            max-height="200"
                                        ></v-skeleton-loader>
                                    </v-col>
                                </v-row>
                            </template>
                            <template v-else>
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
    name: "ExploreView",
    data: () => ({
        searchText: "",
        resultText: "",
        loading: "",
        listaRutinas: [
            {
                name: "Rutinas",
                author: "Tommy",
                detail: "Compliqueti",
                difficulty: 4,
                datecreated: 1602646871112
            },
            {
                name: "Rutinas",
                author: "Tommy",
                destail: "Compliqueti",
                difficulty: 5,
                datecreated: 1602646871112
            },
            {
                name: "Rutinas",
                author: "Tommy",
                detail: "Compliqueti",
                difficulty: 2,
                datecreated: 1602646871112
            },
            {
                name: "Rutinas",
                author: "Tommy",
                detail: "Compliqueti",
                difficulty: 4,
                datecreated: 1602646871112
            }
        ],
        searchResult: undefined
    }),
    components: {
        NavBar,
        RoutineCard
    },
    async created() {
        this.getAllRoutines();
    },
    methods: {
        search() {
            console.log(this.searchText);
            this.resultText = this.searchText;
            //this.searchResult=fetchblabl
        },
        async getAllRoutines() {
            this.loading = true;
            await new Promise(resolve =>
                setTimeout(() => resolve((this.loading = false)), 2000)
            );
        }
    },
    computed: {}
};
</script>

<style></style>
