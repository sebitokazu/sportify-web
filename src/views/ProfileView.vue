<template>
    <div>
        <NavBar />
        <v-main>
            <v-card class="mx-auto my-6 px-4" max-width="350">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-avatar
                                id="avatar-img"
                                class="profile"
                                color="grey"
                                size="100"
                            >
                                <v-img v-if="hasProfileImage" :src="getImage">
                                </v-img>
                                <v-icon dark x-large v-else
                                    >mdi-account-circle</v-icon
                                >
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-card-text>
                            <v-text-field
                                label="Username"
                                outlined
                                v-model="username"
                                :readonly="readMode"
                            ></v-text-field>
                            <v-text-field
                                label="Full name"
                                outlined
                                :readonly="readMode"
                                v-model="fullname"
                            ></v-text-field>
                            <v-text-field
                                label="E-mail"
                                outlined
                                readonly
                                v-model="email"
                                :hint="readMode ? '' : 'Email cant be changed'"
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                outlined
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                :hint="readMode ? '' : 'At least 8 characters'"
                                :readonly="readMode"
                                @click:append="show1 = !show1"
                            ></v-text-field>
                            <v-text-field
                                label="Gender"
                                outlined
                                :readonly="readMode"
                                v-model="gender"
                            ></v-text-field>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                :disabled="readMode"
                                min-width="290px"
                            >
                                <template
                                    :v-if="!readMode"
                                    v-slot:activator="{ on, attrs }"
                                >
                                    <v-text-field
                                        v-model="date"
                                        label="Birthday date"
                                        outlined
                                        v-bind="attrs"
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    ref="picker"
                                    v-model="date"
                                    :max="
                                        new Date().toISOString().substr(0, 10)
                                    "
                                    :min="minYear"
                                    :readonly="readMode"
                                ></v-date-picker>
                            </v-menu>
                        </v-card-text>
                    </v-row>
                    <v-row justify="center">
                        <v-card-actions>
                            <v-row v-if="readMode">
                                <v-btn
                                    color="primary"
                                    @click="readMode = false"
                                >
                                    <v-icon left>create</v-icon>
                                    Edit
                                </v-btn>
                            </v-row>
                            <v-row v-else no-gutters>
                                <v-dialog
                                    v-model="dialog"
                                    persistent
                                    max-width="290"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-col cols="auto">
                                            <v-btn
                                                text
                                                color="error"
                                                v-bind="attrs"
                                                v-on="on"
                                                @click="cancelPreCheck"
                                            >
                                                <v-icon left>clear</v-icon>
                                                Cancel
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="auto">
                                            <v-btn
                                                depressed
                                                color="success"
                                                v-bind="attrs"
                                                v-on="on"
                                                @click="savePreCheck"
                                            >
                                                <v-icon>save</v-icon>
                                                Save
                                            </v-btn>
                                        </v-col>
                                    </template>
                                    <v-card>
                                        <v-card-title class="headline">
                                            {{ dialogTitle }}
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="error"
                                                text
                                                @click="cancel"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="performAction"
                                            >
                                                Ok
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-card-actions>
                    </v-row>
                </v-container>
            </v-card>
        </v-main>
    </div>
</template>

<style scoped>
#avatar-img:hover > * {
    transform: scale(1.25);
}
</style>

<script>
import NavBar from "@/components/NavBar";
//import BirthdayPicker from "@/components/BirthdayPicker";

export default {
    name: "ProfileView",
    components: {
        NavBar
        //BirthdayPicker
    },
    data: () => ({
        show1: false,
        dialog: false,
        dialogTitle: "",
        hasProfileImage: false,
        hasDescription: true,
        hasLocation: true,
        readMode: true,
        username: "Sergio",
        email: "sergioperez@gmail.com",
        password: "Password",
        fullname: "Full name",
        action: "",
        gender: "",
        currentValues: {
            username: "",
            fullname: "",
            password: "",
            date: "",
            gender: ""
        },
        menu: false,
        minYear: "1900-01-01",
        date: "",
        rules: {
            required: value => !!value || "Required.",
            min: v => v.length >= 8 || "Min 8 characters",
            emailMatch: () => "The email and password you entered don't match"
        }
    }),
    mounted() {
        //user = fetch...
        const user = {
            username: "Sergio",
            email: "sergioperez@gmail.com",
            password: "Password",
            fullname: "Full name",

            gender: ""
        };
        this.currentValues = user;
        console.log(user);
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
        }
    },
    methods: {
        performAction() {
            if (this.action === "save") this.save();
            else this.discard();
        },
        save() {
            //post...
            this.dialog = false;
            this.readMode = true;
        },
        discard() {
            this.dialog = false;
            this.readMode = true;
        },
        cancel() {
            this.dialog = false;
        },
        savePreCheck() {
            this.action = "save";
            this.dialogTitle = "Update profile?";
        },
        cancelPreCheck() {
            this.action = "cancel";
            this.dialogTitle = "Discard changes?";
        }
    }
};
</script>
