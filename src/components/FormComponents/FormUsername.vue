<template>



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
