<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="TruckMe Logo" />
    </div>
    <nav class="nav-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/services">Serviços</router-link></li>
        <li><router-link to="/contact">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped src="@/styles/header.css"></style>
