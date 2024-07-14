<template>
  <div class="home-page">
    <HeaderComponent />
    <BannerComponent />
    <!-- Outro conteúdo da página Home -->
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue"; // Importe o BannerComponent

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    BannerComponent, // Adicione o BannerComponent aos componentes importados
  },
};
</script>

<style scoped>
/* Estilos específicos da página Home */
.home-page {
  /* Estilos da página Home */
}
</style>
