<template>
    <div>
        <NavBar />
        <v-main>
            <v-container>
                <v-data-table
                    :headers="headers"
                    :items="myExercises"
                    sort-by="Exercise"
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>My Routines</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <!-- Dialog for new exercise -->
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
    name: "MyExercises",
    components: {
        NavBar
    },
    data: () => ({
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
            this.myExercises = [
                {
                    id: 1,
                    name: "Jumping Jacks",
                    detail: "Jumping Jacks",
                    type: "exercise",
                    duration: 30,
                    repetitions: 0,
                    order: 1
                },
                {
                    id: 1,
                    name: "Aumping Jacks",
                    detail: "Jumping Jacks",
                    type: "exercise",
                    duration: 30,
                    repetitions: 0,
                    order: 1
                },
                {
                    id: 1,
                    name: "Jumping Jacks",
                    detail: "Jumping Jacks",
                    type: "exercise",
                    duration: 30,
                    repetitions: 0,
                    order: 1
                },
                {
                    id: 1,
                    name: "Jumping Jacks",
                    detail: "Jumping Jacks",
                    type: "exercise",
                    duration: 30,
                    repetitions: 0,
                    order: 1
                },
                {
                    id: 1,
                    name: "Jumping Jacks",
                    detail: "Jumping Jacks",
                    type: "exercise",
                    duration: 30,
                    repetitions: 0,
                    order: 1
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

<style></style>
