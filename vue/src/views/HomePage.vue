<template>
  <div class="home-page">
    <HeaderComponent />
    <BannerComponent />
    <AboutComponent />
    <ServicesTableComponent />
    <GalleryComponent />
    <ContactFormComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ServicesTableComponent from "@/components/ServicesTableComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import ContactFormComponent from "@/components/ContactFormComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ServicesTableComponent,
    GalleryComponent,
    ContactFormComponent,
    FooterComponent,
  },
};
</script>
