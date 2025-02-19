<script setup>

import { useRouter } from 'vue-router';
import { useFormStore } from '../stores/formStore';

const formData = useFormStore();
const router = useRouter();

const updateForm = (key,value)=>{
    formData.updateField(key,value);
};

const handleFileUpload = (event)=>{
    const file = event.target.files[0];
    formData.updateField('file',file);
    formData.updateField('filename',file ? file.name: '');
};

const submitForm=()=>{
    router.push('/display');
}

</script>

<template>
    <form @submit.prevent="submitForm">
        <label for="name">Name:
        <input type="text" v-model="formData.name" id="name" required />
        </label>
        <label for="email">Email:
        <input type="email" v-model="formData.email" id="email" required />
        </label>
        <fieldset>
            <legend>Gender: </legend>
            <label for="male">Male:
                <input type="radio" value="Male" v-model="formData.gender" />
            </label>
            <label for="female">Female:
                <input type="radio" value="Female" v-model="formData.gender" />
            </label>
        </fieldset>

        <fieldset>
            <legend>interests: </legend>
            <label>PHP: 
                <input type="checkbox" value="PHP" v-model="formData.interests" />
            </label>
            <label>JavaScript: 
                <input type="checkbox" value="JavaScript" v-model="formData.interests" />
            </label>
            <label>CSS: 
                <input type="checkbox" value="CSS" v-model="formData.interests" />
            </label>
            <label>HTML: 
                <input type="checkbox" value="HTML" v-model="formData.interests" />
            </label>
        </fieldset>

        <label>Country: </label>
        <select v-model="formData.country">
            <option value="MY">Malaysia</option>
            <option value="SG">Singapore</option>
        </select>

        <label>
            <input type="file" @change="handleFileUpload">
        </label>

        <button type="submit">Submit</button>
    </form>
</template>