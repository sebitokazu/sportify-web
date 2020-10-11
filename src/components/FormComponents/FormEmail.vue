<template>
    <v-text-field
        v-model="email"
        label="Email"
        prepend-inner-icon="email"
        :rules="rules"
        filled
        shaped
        required
    >
    </v-text-field>
</template>

<script>
export default {
    name: "FormEmail",
    data: () => ({
        email: "",
        rules: [
            value => !!value || "Email is required",
            value => /.+@.+\..+/.test(value) || "Invalid email"
        ]
    })
};
</script>

<style></style>
