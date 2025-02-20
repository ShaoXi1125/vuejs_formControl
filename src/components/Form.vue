<script setup>
import { useRouter } from 'vue-router';
import { useFormStore } from '../stores/formStore';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ElMessage } from 'element-plus';

const formData = useFormStore();
const router = useRouter();

// Improved validation schema with clearer messages and stricter rules
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  gender: yup.string().required('Please select your gender'),
  interests: yup.array().min(1, 'Please select at least one interest'),
  country: yup.string().required('Please select your country'),
});

const { handleSubmit } = useForm({ validationSchema });

// Define fields with proper initial values
const { value: name, errorMessage: nameError } = useField('name', undefined, { initialValue: '' });
const { value: email, errorMessage: emailError } = useField('email', undefined, { initialValue: '' });
const { value: gender, errorMessage: genderError } = useField('gender', undefined, { initialValue: '' });
const { value: interests, errorMessage: interestsError } = useField('interests', undefined, { initialValue: [] });
const { value: country, errorMessage: countryError } = useField('country', undefined, { initialValue: '' });

// Form submission handler
const submitForm = handleSubmit((values) => {
  // Update store with form values
  formData.updateField('name', values.name);
  formData.updateField('email', values.email);
  formData.updateField('gender', values.gender);
  formData.updateField('interests', values.interests);
  formData.updateField('country', values.country);
  
  ElMessage.success('Submit Success!');
  router.push('/display');
}, (errors) => {
  // Handle validation errors (optional)
  ElMessage.error('Please fix the form errors.');
});
</script>

<template>
    <el-form label-width="100px">
      <el-form-item label="Name" :error="nameError">
        <el-input v-model="name" placeholder="Enter your name" />
      </el-form-item>
  
      <el-form-item label="Email" :error="emailError">
        <el-input v-model="email" placeholder="Enter your email" />
      </el-form-item>
  
      <el-form-item label="Gender" :error="genderError">
        <el-radio-group v-model="gender">
          <el-radio label="Male">Male</el-radio>
          <el-radio label="Female">Female</el-radio>
        </el-radio-group>
      </el-form-item>
  
      <el-form-item label="Interests" :error="interestsError">
        <el-checkbox-group v-model="interests">
          <el-checkbox label="PHP">PHP</el-checkbox>
          <el-checkbox label="CSS">CSS</el-checkbox>
          <el-checkbox label="JavaScript">JavaScript</el-checkbox>
          <el-checkbox label="HTML">HTML</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
  
      <el-form-item label="Country" :error="countryError">
        <el-select v-model="country" placeholder="Select your country">
          <el-option label="Malaysia" value="MY" />
          <el-option label="Singapore" value="SG" />
        </el-select>
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>
    </el-form>

    <!-- <form @submit.prevent="submitForm">
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
    </form> -->
</template>