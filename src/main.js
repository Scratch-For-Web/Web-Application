import { createApp } from "vue";
import CoreuiVue from '@coreui/vue';
//https://coreui.io/vue/docs
import { createStore } from 'vuex'

const store = createStore({
    state: {
        workspace: 0,
        blocklyLocale: (["en", "fr"].includes(navigator.language.split("-")[0]) ? navigator.language.split("-")[0] : "en")
    },
    mutations: {
        setWorkspace(state, { workspace }) {
            state.workspace = workspace;
        }
    }
});

//import './styles/style.css'
import App from "./App.vue";

const app = createApp(App);
app.use(CoreuiVue);
app.use(store)

// Use coreui styleing, Looks kinda bad
//import '@coreui/coreui/dist/css/coreui.min.css'

// Use bootstrap styling, I think it looks better
import 'bootstrap/dist/css/bootstrap.min.css'

app.mount("#app");
