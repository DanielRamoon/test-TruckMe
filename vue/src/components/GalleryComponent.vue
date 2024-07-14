<template>
  <div class="gallery">
    <div class="gallery-container">
      <div class="gallery-nav">
        <button @click="previousImage" class="nav-button">Anterior</button>
        <button @click="nextImage" class="nav-button">Próxima</button>
      </div>
      <div class="image-container">
        <img
          :src="currentImage"
          alt="Imagem da galeria"
          class="gallery-image"
        />
      </div>
    </div>
  </div>
</template>

<script src="../scripts/GalleryComponentScript.js"></script>

<style scoped src="@/styles/gallery.css"></style>
