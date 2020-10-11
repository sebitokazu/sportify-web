import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: "#7400b8",
                secondary: "#DDA7FF",
                accent: "#4083E7",
                error: "#b71c1c",
                background: "#f5f9e3"
            },
            dark: {
                primary: "#7400b8",
                secondary: "#DDA7FF",
                accent: "#4083E7",
                error: "#b71c1c",
                background: "#222023"
            }
        }
    }
});
