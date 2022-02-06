<template>
    <button
        v-if="!isPending"
        type="submit"
        class="text-center py-3 w-full bg-primary text-white font-bold rounded-lg"
    >
        <slot />
    </button>
    <button
        v-else
        type="button"
        class="text-center py-3 w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
        disabled
    >
        Loading...
    </button>
</template>

<script>
import { computed } from "vue";

export default {
    setup(props) {
        const isPending = computed(() => props.isPending);
        return {
            isPending,
        };
    },
};
</script>
