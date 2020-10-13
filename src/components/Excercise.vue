<template>
    <v-card
        max-width="160"
        class="ma-lg-2"
    >
        <v-img
            class="white--text align-end"
            height="130px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-btn
                icon
                color="white"
                class="mb-md-8"
            >
                <v-icon>visibility</v-icon>
            </v-btn>

            <v-card-title>Estocadas</v-card-title>
        </v-img>
        <v-card-actions>
            <v-btn
                color="primary"
                text
            >
                <v-icon small class="mr-2">
                    add
                </v-icon>
                Add
            </v-btn>
            <v-btn
                color="primary"
                text
            >
                <v-icon small class="mr-2">
                    mdi-pencil
                </v-icon>
                Edit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
name: "Excercise"
}
</script>

<style scoped>

</style>