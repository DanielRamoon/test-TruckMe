<template>
  <div class="services-table">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <!-- Nova coluna para o preço -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in paginatedServices" :key="service.id">
          <td>{{ service.name }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.price }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script src="../scripts/ServicesTableComponentScript.js"></script>

<style scoped src="@/styles/services-table.css"></style>
