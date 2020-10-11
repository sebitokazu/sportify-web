<template>
    <v-text-field
        v-model="username"
        label="Username"
        prepend-inner-icon="person"
        :rules="rules"
        filled
        shaped
        required
    >
    </v-text-field>
</template>

<script>
export default {
    name: "FormUsername",
    data: () => ({
        username: "",
        rules: [value => !!value || "Username is required"]
    })
};
</script>

<style></style>
