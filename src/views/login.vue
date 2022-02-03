<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!-- : FORM -->
            <form
                class="flex flex-col justify-start space-y-6"
                @submit.prevent="onSubmit"
            >
                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email</span>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@example.ru"
                            class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
                            v-model="email"
                        />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input
                            id="password"
                            type="password"
                            class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
                            v-model="password"
                        />
                    </label>
                </div>
                <div class="row">
                    <button
                        v-if="!isPending"
                        type="submit"
                        class="text-center py-3 w-full bg-primary text-white font-bold rounded-lg"
                    >
                        Sign In
                    </button>
                    <button
                        v-else
                        type="button"
                        class="text-center py-3 w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
                        disabled
                    >
                        Loading...
                    </button>
                </div>
            </form>

            <!-- : Error -->
            <div v-if="error" class="text-left mt-4 text-red">
                <span>{{ error }}</span>
            </div>

            <!-- : DIRECTION -->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm a new user.</span>
                <router-link
                    :to="{ name: 'Register', params: {} }"
                    class="text-primary font-bold"
                >
                    Sign Up
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useSignIn } from "@/composables/useSignIn";
import { ref } from "vue";

export default {
    setup() {
        const email = ref("");
        const password = ref("");
        const { error, isPending, signin } = useSignIn();

        async function onSubmit() {
            await signin(email.value, password.value);
        }

        return {
            onSubmit,
            email,
            password,
            error,
            isPending,
        };
    },
};
</script>
