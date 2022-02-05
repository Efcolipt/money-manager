import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/app.css";

import { registerGlobalComponent } from "./utils/import";
import { projectAuth } from "@/config/firebase";

let app;

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        registerGlobalComponent(app);

        app.use(router);
        app.mount("#app");
    }
});
