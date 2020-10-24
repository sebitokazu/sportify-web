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
                        class="elevation-1 background"
                    >
                        <template v-slot:item.difficulty="{ item }">
                            <v-rating
                                color="rating"
                                background-color="grey"
                                empty-icon="local_fire_department"
                                full-icon="local_fire_department"
                                readonly
                                length="3"
                                :value="item.difficulty"
                            ></v-rating>
                        </template>
                        <template v-slot:item.public="{ item }">
                            <v-icon :color="getColor(item.public)">
                                {{ getPublic(item.public) }}
                            </v-icon>
                        </template>
                        <template v-slot:top>
                            <v-toolbar flat color="background">
                                <v-toolbar-title>My Routines</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
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
                                                                editedItem.category
                                                            "
                                                            label="category"
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedItem.public
                                                            "
                                                            label="public"
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
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                class="mr-2"
                                @click="deleteItem(item)"
                            >
                                mdi-delete
                            </v-icon>
                            <v-dialog v-model="dialog2" :retain-focus="false">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon small v-on="on" v-bind="attrs">
                                        visibility
                                    </v-icon>
                                </template>
                                <RoutineCardDetailed
                                    :title="item.name"
                                    :detail="item.detail"
                                    @dialog="dialog2 = false"
                                />
                            </v-dialog>
                        </template>
                    </v-data-table>
                </template>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import RoutineCardDetailed from "@/components/RoutineCardDetailed";
import { UserApi } from "@/api/user";
import { RoutinesApi } from "@/api/routines";
import routineStore from "@/store/routineStore";
import router from "@/router";

export default {
    name: "MyRoutines",
    components: { NavBar, RoutineCardDetailed },
    data: () => ({
        firstLoad: true,
        selectTime: [],
        dialog: false,
        dialog2: false,
        headers: [
            {
                text: "Routines",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "Is Public", value: "public" },
            { text: "Difficulty", value: "difficulty" },
            { text: "Category", value: "category" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        myRoutines: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            public: "Yes",
            difficulty: 0,
            category: ""
        },
        defaultItem: {
            name: "",
            public: "Yes",
            difficulty: 0,
            category: ""
        },
        store: routineStore
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
        getPublic(isPublic) {
            if (isPublic == "Yes") return "done";
            else return "clear";
        },
        getColor(isPublic) {
            if (isPublic == "Yes") return "success";
            else return "error";
        },
        async initialize() {
            let results = await UserApi.getCurrentUserRoutines(0, 999);
            results = results.results;
            console.log(results);
            this.myRoutines = results;
        },

        async editItem(item) {
            const index = this.myRoutines.indexOf(item);
            const currentRoutineId = this.myRoutines[index].id;
            let response = await RoutinesApi.getRoutine(currentRoutineId);
            await this.store.toEditRoutine(response);
            await router.push("newroutines");
            // this.editedIndex = this.myRoutines.indexOf(item);
            // this.editedItem = Object.assign({}, item);
            // this.dialog = true;
        },

        async deleteItem(item) {
            const index = this.myRoutines.indexOf(item);
            const currentRoutineId = this.myRoutines[index].id;
            confirm("Are you sure you want to delete this item?") &&
                (await this.store.deleteRoutineById(currentRoutineId));
            this.initialize();
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
