<template>
  <div class="home-page">
    <HeaderComponent />
    <BannerComponent />
    <AboutComponent />
    <!-- Outro conteúdo da página Home -->
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
  },
};
</script>

<style scoped>
.home-page {
}
</style>
