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
        meta: {
            leading: true,
            text: "Hey, Sky Albert",
            isShowFooter: true,
        },
        component: () =>
            import(/* webpackChunkName: "Home" */ "@/views/index.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            leading: false,
            text: "Profile",
            isShowFooter: true,
        },
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
    {
        path: "/report",
        name: "Report",
        meta: {
            leading: false,
            text: "Report",
            isShowFooter: true,
        },
        component: () =>
            import(/* webpackChunkName: "Report" */ "@/views/report.vue"),
    },
    {
        path: "/budget",
        name: "Budget",
        meta: {
            leading: false,
            text: "Budget",
            isShowFooter: true,
        },
        component: () =>
            import(/* webpackChunkName: "Budget" */ "@/views/budget.vue"),
    },
    {
        path: "/new-transaction",
        name: "NewTransaction",
        meta: {
            leading: false,
            text: "New Transaction",
            isShowFooter: false,
        },
        component: () =>
            import(
                /* webpackChunkName: "NewTransaction" */ "@/views/new-transaction.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
