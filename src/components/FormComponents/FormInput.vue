<template>
    <v-btn
        class="mx-auto"
        color="purple lighten-2"
        depressed
        :disabled="!valid"
        type="submit"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: "FormInput",
    props: {
        text: {
            type: String
        },
        valid: {
            type: Boolean
        }
    }
};
</script>

<style></style>
