<template>
        <v-app>
            <v-img src="@/assets/fondo1.jpg" class="bg">
                <router-view></router-view>
            </v-img>
        </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},
    data: () => ({})
};

</script>

<style scoped>
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
}
</style>
