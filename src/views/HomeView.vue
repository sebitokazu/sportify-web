<template>
    <div>
        <NavBar />
        <v-main>
            <v-container fluid>
                <v-row class="mainButtons">
                    <v-col
                        cols="12"
                        sm="4"
                        v-for="(item, index) in buttons"
                        :key="index"
                    >
                        <v-card>
                            <v-row>
                                <v-col>
                                    <v-btn
                                        color="purple darken-1"
                                        x-large
                                        class="ma-9 pa-1"
                                        width="175"
                                        height="175"
                                    >

                                        <v-icon x-large>{{ item.icon }}</v-icon>

                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <v-card-text>{{item.text}}</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>
<style scoped>
.mainButtons .v-btn:hover .v-icon {
    transform: scale(1.2);
}
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
    name: "HomeView",
    components: { NavBar },
    data: () => ({
        buttons: [{ icon: "add", text: "Ingrese para crear una nueva rutina o ejercicios" },
            { icon: "create", text: "Ingrese para editar tus rutinas o ejercicios" },
            { icon: "people", text: "Ingrese para poder buscar ..." }]
    })
};
</script>
