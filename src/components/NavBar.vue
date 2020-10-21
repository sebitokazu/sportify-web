<template>
    <v-app-bar app color="secondary" dark>
        <div class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/sportify.svg"
                transition="scale-transition"
                max-height="60"
            />
        </div>

        <v-spacer></v-spacer>

        <div>
            <v-btn
                text
                color="contrast"
                v-for="(item, index) in nav_buttons"
                :key="index"
                :to="item.path"
                >{{ item.title }}</v-btn
            >
        </div>

        <v-spacer></v-spacer>
        <v-text-field
            class="rounded-pill mt-6 shrink background--text"
            prepend-inner-icon="search"
            label="Search"
            outlined
            dense="true"
        ></v-text-field>

        <v-menu
            v-model="value"
            close-on-click="true"
            close-on-content-click="true"
            offset-y="true"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" text v-on="on">
                    <v-avatar size="75%">
                        <v-icon dark color="contrast">account_circle</v-icon>
                    </v-avatar>
                </v-btn>
            </template>
            <v-list dense flat>
                <v-list-item
                    v-for="(item, index) in profile_overflow"
                    :key="index"
                    :to="item.element.path"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.element.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                        v-text="item.element.title"
                    ></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
export default {
    name: "NavBar",

    data: () => ({
        nav_buttons: [
            { title: "Home", path: "/home" },
            { title: "My Routines", path: "/myroutines" },
            { title: "Create", path: "/newroutines" }
        ],
        profile_overflow: [
            {
                element: {
                    title: "My Profile",
                    icon: "person",
                    path: "/profile"
                }
            },
            { element: { title: "Help", icon: "help_outline", path: "/help" } },
            {
                element: {
                    title: "Sign Out",
                    icon: "exit_to_app",
                    path: "/"
                }
            }
        ]
    })
};
</script>
