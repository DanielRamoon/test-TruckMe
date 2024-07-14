export default {
  name: "ServicesTableComponent",
  data() {
    return {
      currentPage: 1,
      pageSize: 3,
      services: [
        {
          id: 1,
          name: "Limpeza Residencial",
          description: "Limpeza completa de residências.",
          price: "R$ 150,00",
        },
        {
          id: 2,
          name: "Manutenção de Jardim",
          description: "Serviços de manutenção e paisagismo.",
          price: "R$ 200,00",
        },
        {
          id: 3,
          name: "Instalação Elétrica",
          description: "Instalação e reparo elétrico residencial.",
          price: "R$ 250,00",
        },
        {
          id: 4,
          name: "Reparo de Encanamento",
          description: "Reparo e manutenção de encanamentos.",
          price: "R$ 180,00",
        },
        {
          id: 5,
          name: "Consultoria em TI",
          description: "Serviços de consultoria em tecnologia da informação.",
          price: "R$ 300,00",
        },
        {
          id: 6,
          name: "Design de Interiores",
          description: "Projetos e decoração de interiores.",
          price: "R$ 400,00",
        },
        {
          id: 7,
          name: "Serviços de Pintura",
          description: "Pintura interna e externa de residências.",
          price: "R$ 220,00",
        },
        {
          id: 8,
          name: "Limpeza de Ar Condicionado",
          description: "Limpeza e manutenção de sistemas de ar condicionado.",
          price: "R$ 180,00",
        },
        {
          id: 9,
          name: "Serviços de Encadernação",
          description: "Encadernação de documentos e livros.",
          price: "R$ 50,00",
        },
      ],
    };
  },
  computed: {
    paginatedServices() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.services.slice(startIndex, startIndex + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.services.length / this.pageSize);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
