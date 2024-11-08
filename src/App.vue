<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Aquí solo se muestra lo que corresponde al enrutador -->
  <RouterView />
</template>

<style scoped>
/* Puedes agregar estilos globales si los necesitas */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
