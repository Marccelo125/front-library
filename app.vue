<script setup lang="ts">
import axios from 'axios';

const theme = useTheme()

const runtimeConfig = useRuntimeConfig();

// set csrf cookie
axios.get(`${runtimeConfig.public.apiUrl}/sanctum/csrf-cookie`, {
  withCredentials: true,
});

console.log(theme.global.name.value); 
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
