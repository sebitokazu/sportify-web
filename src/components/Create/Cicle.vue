<template>
    <v-data-table
        :headers="headers"
        :items="myRoutines"
        sort-by="routines"
        disable-pagination
        hide-default-footer
        class="background"
    >
        <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
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
                                            label="Routine Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="editedItem.duration"
                                            label="duration"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="editedItem.difficulty"
                                            label = "difficulty"
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
        </template>
        <template v-slot:item.actions="{ item }">
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

<script>
export default {
name: "Cicle.vue",
    data: () => ({
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
            difficulty: 0,
        },
        defaultItem: {
            name: "",
            duration: 0,
            difficulty: 0,
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
                    difficulty: 1,
                },
                {
                    name: "Ice cream sandwich",
                    duration: 237,
                    difficulty: 2,
                },
                {
                    name: "Eclair",
                    duration: 262,
                    difficulty: 2,
                },

                {
                    name: "KitKat",
                    duration: 518,
                    difficulty: 3,
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
}

</script>

<style scoped>

</style>