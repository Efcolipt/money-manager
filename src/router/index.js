import { createRouter, createWebHistory } from "vue-router";
import { AUTH_LAYOUT } from "@/constants";
const routes = [
    {
        path: "/register",
        name: "Register",
        meta: {
            layout: AUTH_LAYOUT,
        },
        component: () =>
            import(/* webpackChunkName: "Register" */ "@/views/register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: AUTH_LAYOUT,
        },
        component: () =>
            import(/* webpackChunkName: "Login" */ "@/views/login.vue"),
    },
    {
        path: "/",
        name: "Home",
        meta: {
            layout: AUTH_LAYOUT,
        },
        component: () =>
            import(/* webpackChunkName: "Home" */ "@/views/index.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;