<template>
  <form @submit.prevent="submitForm" class="form-container">
    <div class="form-group">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="formData.name" required />
      <span v-if="formErrors.name" class="error">{{ formErrors.name }}</span>
    </div>
    <div class="form-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="formData.email" required />
      <span v-if="formErrors.email" class="error">{{ formErrors.email }}</span>
    </div>
    <div class="form-group">
      <label for="message">Mensagem:</label>
      <textarea
        id="message"
        v-model="formData.message"
        rows="4"
        required
      ></textarea>
      <span v-if="formErrors.message" class="error">{{
        formErrors.message
      }}</span>
    </div>
    <button type="submit">Enviar</button>
    <p v-if="formSubmitted" class="success-message">
      Formulário enviado com sucesso!
    </p>
  </form>
</template>

<script src="../scripts/ContactComponentScript"></script>

<style scoped src="@/styles/contact.css"></style>
