<template>
  <div class="home-page">
    <HeaderComponent />
    <BannerComponent />
    <AboutComponent />
    <ServicesTableComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ServicesTableComponent from "@/components/ServicesTableComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ServicesTableComponent,
  },
};
</script>
