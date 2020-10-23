<template>
    <div>
        <NavBar />
        <v-main class="staatliches">
            <v-container fluid >
                <v-row class="mainButtons">
                    <v-col
                        cols="12"
                        sm="6"
                        v-for="(item, index) in buttons"
                        :key="index"
                    >
                        <main-card
                            :icon="item.icon"
                            :path="item.path"
                            :text="item.text"
                            :title="item.title"
                        />
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

.staatliches{
    font-family: 'Staatliches', cursive !IMPORTANT;
}

</style>

<script>
import NavBar from "@/components/NavBar";
import MainCard from "@/components/MainCard";

export default {
    name: "HomeView",
    components: { MainCard, NavBar },
    data: () => ({
        buttons: [
            {
                icon: "directions_run",
                text:
                    "Ingrese para ver todas tu ejercicios. Vas a poder ver la duración de cada ejercicio, el detalle y vas a poder edirarlos. Tambien vas a poder crear uno nuevo.",
                path: "/myexercises",
                title: "Exercises"
            },
            {
                icon: "fitness_center",
                text:
                    "Ingrese para ver todas tus rutinas. Vas a poder ver la duración de cada una y su dificultad. Tambien vas a poder eliminar y crear rutinas a partir de ejercicios. ",
                path: "/myroutines",
                title: "Routines"
            },
            {
                icon: "search",
                text:
                    "Te quedaste sin ideas? Ingrese para poder navegar a traves de todas las rutinas creadas dentro de sportify.",
                path: "/explore",
                title: "Explore"
            },
            {
                icon: "add",
                text:
                    "Ingrese para poder crear una nueva rutina desde cero. Vas a poder agregar todos los ejercicios, ciclos, dificultad y duraciones que quieras.",
                path: "/newroutines",
                title: "Create"
            }
        ]
    })
};
</script>
