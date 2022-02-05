import { createRouter, createWebHistory } from "vue-router";
import { AUTH_LAYOUT } from "@/constants";
import { projectAuth } from "@/config/firebase";

const requireAuth = (to, from, next) => {
    const user = projectAuth.currentUser;

    if (!user) next({ name: "Login", params: {} });
    else next();
};

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
        component: () =>
            import(/* webpackChunkName: "Home" */ "@/views/index.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () =>
            import(/* webpackChunkName: "Profile" */ "@/views/profile.vue"),
        beforeEnter: requireAuth,
    },
    {
        path: "/logout",
        name: "Logout",
        component: () =>
            import(/* webpackChunkName: "Logout" */ "@/views/logout.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
