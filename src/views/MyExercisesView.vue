<template>
    <div>
        <NavBar />
        <v-main>
            <v-container class="mt-3">
                <v-card>
                    <v-card-title>
                        My Exercises
                        <v-spacer></v-spacer>
                        <!-- <template v-slot:top> -->
                        <!-- Dialog for new exercise -->
                        <!-- </template> -->
                    </v-card-title>
                    <v-skeleton-loader
                        v-if="firstLoad"
                        class="px-2"
                        type="table-row-divider@5,table-tfoot "
                    ></v-skeleton-loader>
                    <v-data-table
                        v-else
                        :headers="headers"
                        :items="myExercises"
                        sort-by="Exercise"
                        class="elevation-1"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                            <v-icon small @click="checkDelete(item)">
                                mdi-delete
                            </v-icon>
                        </template>
                        <template v-slot:top v-if="deleteDialog">
                            <ConfirmationDialog
                                :dialog="deleteDialog"
                                :dialogTitle="
                                    `Are you sure you want to delete ${toDelete.name}?`
                                "
                                @cancel="deleteDialog = false"
                                @confirm="deleteItem"
                            />
                        </template>
                    </v-data-table>
                </v-card>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ConfirmationDialog from "@/components/ConfirmationDialog";
import {RoutinesApi} from "@/api/routines";

export default {
    name: "MyExercises",
    components: {
        NavBar,
        ConfirmationDialog
    },

    data: () => ({
        deleteDialog: false,
        firstLoad: true,
        headers: [
            {
                text: "Exercise",
                align: "start",
                sortable: true,
                value: "name"
            },
            { text: "Detail", value: "detail" },
            { text: "Duration (min)", value: "duration" },
            { text: "Type", value: "type" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        myExercises: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            duration: 0,
            difficulty: 0,
            places: 0,
            groups: 0
        },
        defaultItem: {
            name: "",
            duration: 0,
            difficulty: 0,
            places: 0,
            groups: 0
        },
        toDelete: null
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },

    beforeMount() {
        this.firstLoad = true;
    },
    async created() {
        await new Promise(resolve =>
            setTimeout(() => resolve((this.firstLoad = false)), 2000)
        );
        await this.initialize();
    },

    methods: {
        async initialize() {
            let response = await RoutinesApi.getExercises(1, 1);
            this.myExercises = response.results;
        },

        editItem(item) {
            this.editedIndex = this.myRoutines.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        checkDelete(item) {
            this.deleteDialog = true;
            this.toDelete = item;
        },

        deleteItem() {
            //post delete
            const index = this.myExercises.indexOf(this.toDelete);
            this.deleteDialog = false;
            this.myExercises.splice(index, 1);
            this.toDelete = null;
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(
                    this.myRoutines[this.editedIndex],
                    this.editedItem
                );
            } else {
                this.myRoutines.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>

<style></style>
