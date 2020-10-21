<template>
    <v-dialog :value="dialog" max-width="290">
        <v-card>
            <v-card-title class="headline">
                {{ dialogTitle }}
            </v-card-title>
            <v-card-text>
                <p>{{ message }}</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="cancel">
                    Cancel
                </v-btn>
                <v-btn color="green darken-1" text @click="confirm">
                    Ok
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "ConfirmationDialog",
    props: {
        dialog: {
            type: Boolean
        },
        dialogTitle: {
            type: String
        },
        message: {
            type: String
        }
    },
    methods: {
        confirm() {
            this.$emit("confirm");
        },
        cancel() {
            this.$emit("cancel");
        }
    }
};
</script>

<style></style>
