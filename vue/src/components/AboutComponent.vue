<template>
  <div class="about">
    <h2>Sobre Nós</h2>
    <p>
      Somos uma empresa comprometida com a excelência. Nosso objetivo é fornecer
      serviços de alta qualidade que atendam às necessidades dos nossos
      clientes.
      <span v-if="isExpanded">
        Fundada em 2020, temos uma equipe dedicada que trabalha incansavelmente
        para garantir a satisfação total. Acreditamos em inovação, qualidade e
        compromisso. Nossos valores fundamentais são integridade, respeito e
        responsabilidade ambiental. Estamos comprometidos em criar um impacto
        positivo em nossas comunidades e no meio ambiente.
      </span>
    </p>
    <button @click="toggleReadMore">
      {{ isExpanded ? "Leia menos" : "Leia mais" }}
    </button>
  </div>
</template>

<script>
import AboutComponentScript from "@/scripts/AboutComponentScript.js";

export default {
  name: "AboutComponent",
  ...AboutComponentScript,
};
</script>

<style scoped src="@/styles/about.css"></style>
