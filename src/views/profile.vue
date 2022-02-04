<template>
    <!-- : Info -->
    <div class="row">
        <div class="container mx-auto p-8">
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img
                        class="w-full h-auto object-cover"
                        src="https://i.pinimg.com/736x/d8/34/89/d834897e4d0849e1f897de1b580f376d.jpg"
                        size="xs"
                        alt="User profile avatar"
                    />
                </div>
                <div class="text-bold text-2xl text-primary mt-3">
                    {{ user.displayName }}
                </div>
                <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
            </div>
        </div>
    </div>

    <!-- : Menu -->
    <div class="row">
        <div class="container mx-auto px-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-semibold text-xl text-primary mb-2">
                        General
                    </h3>
                </div>
            </div>
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <ul>
                        <li
                            class="text-dark"
                            v-for="(profileOption, index) in profileOptions"
                            :key="profileOption.name"
                        >
                            <router-link
                                :to="profileOption.route"
                                class="flex justify-between items-center py-3"
                            >
                                <div
                                    class="flex items-center text-left"
                                    :class="{
                                        'text-red':
                                            index === profileOptions.length - 1,
                                    }"
                                >
                                    <i
                                        class="t2ico text-2xl"
                                        :class="profileOption.icon"
                                    ></i>
                                    <h5 class="font-semibold ml-3">
                                        {{ profileOption.name }}
                                    </h5>
                                </div>
                                <div class="text-right">
                                    <i class="t2ico t2ico-arrow-right"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
    setup() {
        const profileOptions = reactive(PROFILE_OPTIONS);

        const { getUser } = useUser();
        const { user } = getUser();
        return {
            profileOptions,
            user,
        };
    },
};
</script>
