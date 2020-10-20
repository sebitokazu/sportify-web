<template>
    <div>
        <NavBar />
        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-col cols="auto">
                        <h1>Need some help?</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="10">
                        <v-expansion-panels accordion focusable>
                            <v-expansion-panel
                                v-for="(item, i) in helpItems"
                                :key="i"
                            >
                                <v-expansion-panel-header>
                                    {{ item.title }}
                                    <template v-slot:actions>
                                        <v-icon color="primary">
                                            $expand
                                        </v-icon>
                                    </template>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    {{ item.description }}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
    name: "HelpView",
    components: {
        NavBar
    },
    data: () => ({
        helpItems: [
            { title: "Create a routine", description: "Go to Create -> ..." },
            { title: "", description: "" },
            { title: "", description: "" },
            { title: "", description: "" },
            { title: "", description: "" }
        ]
    })
};
</script>

<style></style>
