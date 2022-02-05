<template>
    <footer
        id="footer"
        class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
    >
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="item in navItems" :key="item.name">
                    <router-link :to="{ name: item.name, params: {} }">
                        <i class="t2ico text-2xl" :class="item.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>

        <div
            data-circle
            class="top-0 absolute left-1/2 transform -translate-x-1/2"
        ></div>
        <div
            data-circle-inset
            class="flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full cursor-pointer -top-6 absolute left-1/2 transform -translate-x-1/2"
        >
            <i class="t2ico text-white t2ico-plus"></i>
        </div>
    </footer>
</template>

<script>
import { NAV_ITEMS_BOTTOM } from "@/constants";
import { reactive } from "vue";

export default {
    setup() {
        const navItems = reactive(NAV_ITEMS_BOTTOM);
        return { navItems };
    },
};
</script>

<style scoped lang="css">
footer#footer ul li:nth-child(2) {
    margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
    margin-left: 10%;
}

footer#footer > div[data-circle] {
    @apply bg-dark-light;

    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    width: 60px;
    height: 30px;
}
</style>
