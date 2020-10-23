<template>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-on="on" v-bind="attrs"> Add cycle</v-btn>
        </template>
        <v-card class="ma-auto">
            <v-card-title>
                New Cycle
            </v-card-title>
            <v-card-text>
                <v-text-field label="Name" v-model="cycle.name"></v-text-field>
                <v-textarea
                    label="Detail"
                    v-model="cycle.detail"
                    auto-grow
                ></v-textarea>
                <v-select
                    :items="types"
                    label="Type"
                    v-model="cycle.type"
                ></v-select>
                <v-slider
                    label="Order"
                    v-model="cycle.order"
                    thumb-size="24"
                    thumb-label="always"
                    min="1"
                    max="15"
                ></v-slider>
                <v-slider
                    label="Repetitions"
                    v-model="cycle.repetitions"
                    thumb-size="24"
                    thumb-label="always"
                    min="1"
                    max="150"
                ></v-slider>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="addCycle">Confirm</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import routineStore from "@/store/routineStore";
export default {
    name: "FormAddCycle",
    data: () => ({
        dialog: false,
        types: ["exercise", "rest", "warmup"],
        cycle: {
            name: "",
            detail: "",
            type: "",
            order: 1,
            repetitions: 1
        },
        store: routineStore
    }),
    methods: {
        addCycle() {
            this.dialog = false;
            this.store.addCycle(this.cycle.name, this.cycle);
        }
    }
};
</script>

<style></style>
