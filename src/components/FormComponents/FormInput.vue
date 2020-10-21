<template>
    <v-btn
        class="mx-auto"
        color="purple lighten-2"
        depressed
        :disabled="!valid"
        type="submit"
        :to="to"
        @click="emitLoginAction"
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
        },
        to: {
            type: String
        }
    },
    methods: {
        emitLoginAction(){
            this.$emit("login");
        }
    }
};
</script>

<style></style>
