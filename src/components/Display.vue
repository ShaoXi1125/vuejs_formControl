<script setup>

import { useFormStore } from '../stores/formStore';
import { useRouter } from 'vue-router';

const formData = useFormStore();
const router = useRouter();

const goBack = ()=>{
    router.push('/');
}
</script>

<template>
<div>
    <el-card>
        <h1>Data List: </h1>
    <p>Name: {{formData.name}}</p>
    <p>Email: {{formData.email}}</p>
    <p>Gender: {{formData.gender}}</p>
    <p>Interests: {{formData.interests.join(', ')}}</p>
    <p>Country: {{formData.country}}</p>
    <p>Filename: {{formData.filename}}</p>

    <el-button type="primary" @click="goBack">Back</el-button>
    </el-card>
    
</div>
</template>