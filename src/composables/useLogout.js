import { projectAuth } from "@/config/firebase";
import { ref } from "vue";

const error = ref(null);

async function logout() {
    error.value = null;
    try {
        const res = await projectAuth.signOut();

        return res;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    }
}

export function useLogout() {
    return { error, logout };
}
