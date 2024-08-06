<script setup lang="ts">
const theme = useTheme()

// Ver qual tema está ativo
console.log(theme.global.name.value); 
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
