<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!-- : FORM -->
            <form
                class="flex flex-col justify-start space-y-6"
                @submit.prevent="onSubmit"
            >
                <div class="row">
                    <label class="flex flex-col" for="fullName">
                        <span class="font-semibold">Full Name</span>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Ivan"
                            class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
                            v-model="fullName"
                        />
                    </label>
                </div>
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
                    <BaseButton :isPending="isPending"> Sign Up </BaseButton>
                </div>
            </form>

            <!-- : Error -->
            <div v-if="error" class="text-left mt-4 text-red">
                <span>{{ error }}</span>
            </div>

            <!-- : DIRECTION -->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm already a member.</span>
                <router-link
                    :to="{ name: 'Login', params: {} }"
                    class="text-primary font-bold"
                >
                    Sign In
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useSignUp } from "@/composables/useSignUp";
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@/components/BaseButton.vue";

export default {
    setup() {
        const { error, isPending, signup } = useSignUp();
        const router = useRouter();

        const fullName = ref("");
        const email = ref("");
        const password = ref("");

        async function onSubmit() {
            await signup(email.value, password.value, fullName.value);
            if (!error.value) router.push({ name: "Home", params: {} });
        }

        return {
            onSubmit,
            password,
            email,
            fullName,
            error,
            isPending,
        };
    },
    components: { BaseButton },
};
</script>

<style></style>
