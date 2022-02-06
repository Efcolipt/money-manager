<template>
    <form @submit.prevent="onSubmit">
        <!-- : Form main -->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span
                                    class="inline-block px-1 text-dark border border-dark rounded text-sm"
                                >
                                    USD
                                </span>
                            </div>
                            <div
                                class="flex flex-col border-b border-gray-100 pb-1"
                            >
                                <span class="font-semibold text-xs text-dark"
                                    >Total</span
                                >
                                <input
                                    type="number"
                                    id="total"
                                    class="text-4xl text-dark w-full outline-none mt-1"
                                    placeholder="0"
                                    v-model="total"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="category" class="flex items-center">
                            <div
                                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
                            >
                                <span
                                    class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                                ></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    type="text"
                                    id="category"
                                    class="text-xl text-dark w-full outline-none"
                                    placeholder="Select a category"
                                    v-model="category"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="note" class="flex items-center">
                            <div
                                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
                            >
                                <span class="flex-none w-10 mr-4">
                                    <i
                                        class="t2ico t2ico-document text-2xl"
                                    ></i>
                                </span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    type="text"
                                    id="note"
                                    class="text-dark w-full outline-none"
                                    placeholder="Note"
                                    v-model="note"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="time" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span
                                    class="flex items-center justify-end text-dark"
                                >
                                    <i
                                        class="t2ico t2ico-calendar text-2xl"
                                    ></i>
                                </span>
                            </div>
                            <div class="flex-1 py-2 border-b border-gray-100">
                                <div class="text-dark w-full">
                                    {{ new Date() }}
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="wallet" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span
                                    class="flex items-center justify-end text-dark"
                                >
                                    <i class="t2ico t2ico-wallet text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1 py-2">
                                <div class="text-dark w-full">My Wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-8" v-if="!isMoreDetails">
            <button
                @click="isMoreDetails = true"
                class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
            >
                More Details
            </button>
        </div>

        <!-- : Form advanced -->
        <template v-if="isMoreDetails">
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex items-center">
                                <div
                                    class="flex items-center flex-none w-10 text-right leading-10 mr-4"
                                >
                                    <span class="flex-none w-10 mr-4">
                                        <i
                                            class="t2ico t2ico-location text-2xl"
                                        ></i>
                                    </span>
                                </div>
                                <div
                                    class="flex-1 border-b border-gray-100 py-3"
                                >
                                    <input
                                        type="text"
                                        id="location"
                                        class="text-dark w-full outline-none"
                                        placeholder="location"
                                        v-model="location"
                                    />
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <label for="withPerson" class="flex items-center">
                                <div class="flex-none w-10 mr-4">
                                    <span
                                        class="flex items-center justify-end text-dark"
                                    >
                                        <i
                                            class="t2ico t2ico-users text-2xl"
                                        ></i>
                                    </span>
                                </div>
                                <div class="flex-1 py-2">
                                    <input
                                        type="text"
                                        id="withPerson"
                                        class="text-dark w-full outline-none"
                                        placeholder="With person"
                                        v-model="person"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <!-- : Upload photos -->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label
                            for="file"
                            class="flex items-center text-primary"
                        >
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end">
                                    <i
                                        class="t2ico t2ico-camera text-2xl text-primary"
                                    ></i>
                                </span>
                            </div>
                            <div class="flex-1 py-2">
                                <div class="w-ful">Upload Photos</div>
                                <input
                                    type="file"
                                    id="file"
                                    class="w-0 h-0 overflow-hidden absolute"
                                    @change="onChangeFile"
                                />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="text-red my-3" v-if="errorFile">{{ errorFile }}</div>
        </div>

        <BaseButton :isPending="isPending" class="mt-8">
            Send transaction
        </BaseButton>
        <div class="text-red my-3 text-center" v-if="errorTransaction">
            {{ errorTransaction }}
        </div>
        <div class="text-green my-3 text-center" v-if="successTransaction">
            {{ successTransaction }}
        </div>
    </form>
</template>

<script>
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
import { useUser } from "@/composables/useUser";
import { ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
    setup() {
        const { getUser } = useUser();
        const { error: errorTransaction, addRecord } =
            useCollection("transactions");
        const { uploadFile, url } = useStorage("transactions");

        const isMoreDetails = ref(false);
        const total = ref("");
        const category = ref("");
        const note = ref("");
        const location = ref("");
        const person = ref("");
        const time = ref(new Date());
        const file = ref(null);
        const errorFile = ref(null);
        const successTransaction = ref(null);
        const isPending = ref(false);

        function onChangeFile(e) {
            errorFile.value = null;
            const selected = e.target.files[0];
            const types = ["image/png", "image/jpg", "image/jpeg"];

            if (selected && types.includes(selected.type)) {
                file.value = selected;
            } else {
                file.value = null;
                errorFile.value =
                    "Please select a file type: " + types.join(", ");
                console.log(errorFile.value);
            }
        }
        async function onSubmit() {
            isPending.value = true;
            errorFile.value = null;
            errorTransaction.value = null;
            successTransaction.value = null;

            if (file.value) await uploadFile(file.value);

            const { user } = getUser();

            const transaction = {
                total: parseInt(total.value),
                category: category.value,
                note: note.value,
                time: time.value,
                location: location.value,
                person: person.value,
                userId: user.value.uid,
                thumbnail: url.value,
            };

            await addRecord(transaction);

            successTransaction.value = "Transaction success";
            isPending.value = false;
        }
        return {
            onSubmit,
            isMoreDetails,
            total,
            category,
            note,
            time,
            errorTransaction,
            onChangeFile,
            errorFile,
            successTransaction,
            location,
            person,
            isPending,
        };
    },
    components: { BaseButton },
};
</script>
