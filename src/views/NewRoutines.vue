<template>
    <div>
        <NavBar />
        <v-main>
            <v-container fluid class="px-3">
                <v-row no-gutters>
                    <v-col class="px-2">
                        <CreateRoutine />
                    </v-col>
                    <v-divider vertical></v-divider>

                    <v-col cols="6" class="px-2">
                        <AddCostumeExcercise />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import CreateRoutine from "@/components/Create/CreateRoutine";
import AddCostumeExcercise from "@/components/Create/AddCostumeExercise";

export default {
    name: "NewRoutines",
    components: { AddCostumeExcercise, CreateRoutine, NavBar },
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: "Excercise name",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "Time", value: "time" },
            { text: "Target", value: "target" },
            { text: "Set", value: "set" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        excercises: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            time: 1,
            target: 1,
            set: 1
        },
        defaultItem: {
            name: "",
            time: 1,
            target: 1,
            set: 1
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
        },
        dialogDelete(val) {
            val || this.closeDelete();
        }
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            this.excercises = [
                {
                    name: "Abdominales",
                    time: 5,
                    target: 6.0,
                    set: 10
                },
                {
                    name: "Flexiones",
                    time: 2,
                    target: 9.0,
                    set: 25
                },
                {
                    name: "Eclair",
                    time: 4,
                    target: 16.0,
                    set: 18
                }
            ];
        },

        editItem(item) {
            this.editedIndex = this.excercises.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.excercises.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.excercises.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(
                    this.excercises[this.editedIndex],
                    this.editedItem
                );
            } else {
                this.excercises.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>

<style scoped></style>
