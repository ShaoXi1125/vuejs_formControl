<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/">Form</RouterLink>
      <RouterLink to="/display">Display</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

