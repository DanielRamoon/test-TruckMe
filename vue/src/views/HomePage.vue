<template>
  <div class="home-page">
    <HeaderComponent />
    <BannerComponent />
    <AboutComponent />
    <ServicesTableComponent />
    <GalleryComponent />
    <ContactFormComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ServicesTableComponent from "@/components/ServicesTableComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import ContactFormComponent from "@/components/ContactFormComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ServicesTableComponent,
    GalleryComponent,
    ContactFormComponent,
  },
};
</script>

<style scoped>
.home-page {
}
</style>
