<template>
    <div>
        <NavBar />
        <v-main>
            <v-container class="mt-3">
                <v-card color="background">
                    <v-card-title>
                        My Routines
                    </v-card-title>

                    <template>
                        <v-skeleton-loader
                            v-if="firstLoad"
                            class="px-2"
                            type="table-row-divider@5,table-tfoot "
                        ></v-skeleton-loader>
                        <v-data-table
                            v-else
                            :headers="headers"
                            :items="myRoutines"
                            sort-by="routines"
                            class="elevation-1 background"
                        >
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon small @click="deleteItem(item)">
                                    mdi-delete
                                </v-icon>
                            </template>
                            <template v-slot:no-data>
                                <v-btn color="primary" @click="initialize">
                                    Reset
                                </v-btn>
                            </template>
                        </v-data-table>
                    </template>
                </v-card>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
    name: "MyRoutines",
    components: { NavBar },
    data: () => ({
        firstLoad: true,
        selectTime: [],
        itemsTime: [
            "10 minutes",
            "20 minutes",
            "30 minutes",
            "40 minutes",
            "50 minutes",
            "1 hour"
        ],
        selectSurrounding: [],
        itemsSurrounding: ["House", "Outdoor", "Silence", "Gym"],
        itemsMaterials: [
            "Pesas de 1kg",
            "Pesas de 2kg",
            "Pesas de 5kg",
            "Pesas de 10kg",
            "Pelota",
            "Silla",
            "Cinta"
        ],
        dialog: false,
        headers: [
            {
                text: "Routines",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "Duration (min)", value: "duration" },
            { text: "Difficulty", value: "difficulty" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        myRoutines: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            duration: 0,
            difficulty: 0
        },
        defaultItem: {
            name: "",
            duration: 0,
            difficulty: 0
        }
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
        this.initialize();
    },

    methods: {
        initialize() {
            this.myRoutines = [
                {
                    name: "Frozen Yogurt",
                    duration: 159,
                    difficulty: 1
                },
                {
                    name: "Ice cream sandwich",
                    duration: 237,
                    difficulty: 2
                },
                {
                    name: "Eclair",
                    duration: 262,
                    difficulty: 2
                },
                {
                    name: "Cupcake",
                    duration: 305,
                    difficulty: 3
                },
                {
                    name: "Gingerbread",
                    duration: 356,
                    difficulty: 1
                },
                {
                    name: "KitKat",
                    duration: 518,
                    difficulty: 3
                }
            ];
        },

        editItem(item) {
            this.editedIndex = this.myRoutines.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            const index = this.myRoutines.indexOf(item);
            confirm("Are you sure you want to delete this item?") &&
                this.myRoutines.splice(index, 1);
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

<style scoped></style>
