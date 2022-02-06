import { projectFirestore } from "@/config/firebase";
import { ref } from "vue";

const useCollection = (name) => {
    const error = ref(null);

    async function addRecord(record) {
        error.value = null;
        try {
            const res = await projectFirestore.collection(name).add(record);

            return res;
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }
    return { error, addRecord };
};

export default useCollection;
