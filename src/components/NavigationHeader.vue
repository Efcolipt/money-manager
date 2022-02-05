<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div
                        v-if="meta.leading"
                        class="w-10 h-10 overflow-hidden rounded-full"
                    >
                        <img
                            class="w-full h-auto object-cover"
                            src="https://i.pinimg.com/736x/d8/34/89/d834897e4d0849e1f897de1b580f376d.jpg"
                            alt="User profile Avatar"
                            size="sm"
                        />
                    </div>
                    <h1 class="text-xl font-bold text-dark ml-2">
                        {{ meta.text }}
                    </h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i
                                class="t2ico t2ico-notification text-2xl cursor-pointer"
                            ></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const route = useRoute();
        return {
            meta: computed(() => route.meta),
        };
    },
};
</script>

<style scoped lang="css"></style>
