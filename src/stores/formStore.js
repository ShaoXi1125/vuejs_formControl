import { defineStore } from "pinia";

export const useFormStore = defineStore(
'formData',{
    state:()=>({
        name: '',
        email: '',
        gender: '',
        interests: [],
        country: ''
    }),

    actions: {
        updateField(key,value){
            this[key]=value;
        },
    },
});