import { projectAuth } from "@/config/firebase";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(null);

async function signup(email, password) {
    isPending.value = true;
    error.value = null;
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(
            email,
            password
        );
        if (!res) throw new Error("Could not create a new user.");
        return res;
    } catch (err) {
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignUp() {
    return { error, isPending, signup };
}
