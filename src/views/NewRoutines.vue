<template>
    <div>
        <NavBar />
        <v-main>
            <v-row>
                <v-col
                    cols="12"
                    sm="5"
                    md="5"
                >


                    <v-data-table
                        :headers="headers"
                        :items="excercises"
                        sort-by="calories"
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-toolbar
                                flat
                            >
                                <v-toolbar-title>My Routine</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-dialog
                                    v-model="dialog"
                                    max-width="500px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="error"
                                            dark
                                            class="mb-2"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            color="accent"
                                            dark
                                            class="mb-2"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            Save
                                        </v-btn>

                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{ formTitle }}</span>
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
                                                            v-model="editedItem.name"
                                                            label="Excercise name"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.time"
                                                            label="Time"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.set"
                                                            label="Set"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.target"
                                                            label="Target"
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
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                small
                                class="mr-2"
                                @click="editItem(item)"
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                @click="deleteItem(item)"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <template v-slot:no-data>
                            <v-btn
                                color="primary"
                                @click="initialize"
                            >
                                Reset
                            </v-btn>
                        </template>
                    </v-data-table>



                </v-col>
                <v-divider

                    vertical
                ></v-divider>
                <v-col
                    cols="6"
                    md="6"
                >
                    <v-responsive
                        class="overflow-y-auto"
                        max-height="800"
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
                                    tile
                                >
                                    <v-row v-for="n in 6"
                                           :key="n">
                                            <Excercise/>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </template>
                    </v-responsive>
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
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Excercise name',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Time', value: 'time' },
            { text: 'Target', value: 'target' },
            { text: 'Set', value: 'set' },
            { text: 'Actions', value: 'actions', sortable: false },

        ],
        excercises: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            time: 1,
            target: 1,
            set: 1,
        },
        defaultItem: {
            name: '',
            time: 1,
            target: 1,
            set: 1,
        },
    }),

    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    created () {
        this.initialize()
    },

    methods: {
        initialize () {
            this.excercises = [
                {
                    name: 'Abdominales',
                    time: 5,
                    target: 6.0,
                    set: 10,
                },
                {
                    name: 'Flexiones',
                    time: 2,
                    target: 9.0,
                    set: 25,
                },
                {
                    name: 'Eclair',
                    time: 4,
                    target: 16.0,
                    set: 18,
                },

            ]
        },

        editItem (item) {
            this.editedIndex = this.excercises.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.excercises.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.excercises.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1) {
                Object.assign(this.excercises[this.editedIndex], this.editedItem)
            } else {
                this.excercises.push(this.editedItem)
            }
            this.close()
        },
    },
};
</script>

<style scoped></style>