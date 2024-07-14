<template>
  <div class="banner">
    <img class="banner-image" :src="bannerImage" alt="Banner Image" />
    <h1 class="banner-title">Seja bem-vindo</h1>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      bannerImage: require("@/assets/images/banner.jpeg"),
    };
  },
};
</script>

<style scoped src="@/styles/banner.css"></style>
