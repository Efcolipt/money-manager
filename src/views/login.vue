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
                        />
                    </label>
                </div>
                <div class="row">
                    <button
                        type="submit"
                        class="text-center py-3 w-full bg-primary text-white font-bold rounded-lg"
                    >
                        Sign In
                    </button>
                </div>
            </form>

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
export default {
    setup() {
        function onSubmit() {}

        return {
            onSubmit,
        };
    },
};
</script>
