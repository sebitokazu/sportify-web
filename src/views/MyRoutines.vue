<template>
    <div>
        <NavBar />
        <v-main>
            <v-container fluid>
                <template>
                    <v-data-table
                        :headers="headers"
                        :items="myRoutines"
                        sort-by="routines"
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-toolbar-title>My Routines</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-container fluid>
                                    <v-row>
                                        <v-col>
                                            <v-combobox
                                                v-model="selectTime"
                                                :items="itemsTime"
                                                label="Time"
                                                multiple
                                                outlined
                                                dense
                                            ></v-combobox>
                                        </v-col>
                                        <v-col>
                                            <v-combobox
                                                v-model="selectSurrounding"
                                                :items="itemsSurrounding"
                                                label="Surrounding"
                                                multiple
                                                outlined
                                                dense
                                            ></v-combobox>
                                        </v-col>
                                        <v-col>
                                            <v-combobox
                                                v-model="selectMaterials"
                                                :items="itemsMaterials"
                                                label="Materials"
                                                multiple
                                                outlined
                                                dense
                                            ></v-combobox>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <v-spacer></v-spacer>
                                <v-dialog v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="primary"
                                            dark
                                            class="mb-2"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            New Item
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{
                                                formTitle
                                            }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedItem.name
                                                            "
                                                            label="Routine Name"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedItem.duration
                                                            "
                                                            label="duration"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedItem.difficulty
                                                            "
                                                            label="difficulty"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedItem.places
                                                            "
                                                            label="places"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedItem.groups
                                                            "
                                                            label="groups"
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="close"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="save"
                                            >
                                                Save
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editItem(item)">
                                mdi-content-copy
                            </v-icon>
                            <v-icon small class="mr-2" @click="editItem(item)">
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
            { text: "Places", value: "places" },
            { text: "Muscular Groups", value: "groups" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        myRoutines: [],
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

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            this.myRoutines = [
                {
                    name: "Frozen Yogurt",
                    duration: 159,
                    difficulty: 6.0,
                    places: 24,
                    groups: 4.0
                },
                {
                    name: "Ice cream sandwich",
                    duration: 237,
                    difficulty: 9.0,
                    places: 37,
                    groups: 4.3
                },
                {
                    name: "Eclair",
                    duration: 262,
                    difficulty: 16.0,
                    places: 23,
                    groups: 6.0
                },
                {
                    name: "Cupcake",
                    duration: 305,
                    difficulty: 3.7,
                    places: 67,
                    groups: 4.3
                },
                {
                    name: "Gingerbread",
                    duration: 356,
                    difficulty: 16.0,
                    places: 49,
                    groups: 3.9
                },
                {
                    name: "Jelly bean",
                    duration: 375,
                    difficulty: 0.0,
                    places: 94,
                    groups: 0.0
                },
                {
                    name: "Lollipop",
                    duration: 392,
                    difficulty: 0.2,
                    places: 98,
                    groups: 0
                },
                {
                    name: "Honeycomb",
                    duration: 408,
                    difficulty: 3.2,
                    places: 87,
                    groups: 6.5
                },
                {
                    name: "Donut",
                    duration: 452,
                    difficulty: 25.0,
                    places: 51,
                    groups: 4.9
                },
                {
                    name: "KitKat",
                    duration: 518,
                    difficulty: 26.0,
                    places: 65,
                    groups: 7
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
