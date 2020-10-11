<template>
    <v-text-field
        v-model="password"
        label="Password"
        prepend-inner-icon="lock"
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        :rules="rules"
        filled
        shaped
        :hint="rules ? 'It looks nice!' : 'At least 8 characters'"
        @click:append="show = !show"
        required
    >
    </v-text-field>
</template>

<script>
export default {
    name: "FormPassword",
    data: () => ({
        password: "",
        show: false,
        rules: [
            value => !!value || "Password is required",
            value => {
                const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
                return (
                    pattern.test(value) ||
                    "Min. 8 characters with at least one capital letter, a number and a special character."
                );
            }
        ]
    })
};
</script>

<style></style>
