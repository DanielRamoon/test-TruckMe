export default {
  name: "ServicesTableComponent",
  data() {
    return {
      currentPage: 1,
      pageSize: 3,
      services: [
        {
          id: 1,
          name: "Transporte de Cargas",
          description: "Transporte de cargas para diversas localidades.",
          price: "Preço sob consulta",
        },
        {
          id: 2,
          name: "Armazenagem",
          description: "Armazenagem segura e organizada de mercadorias.",
          price: "Preço sob consulta",
        },
        {
          id: 3,
          name: "Distribuição",
          description: "Distribuição eficiente e pontual de mercadorias.",
          price: "Preço sob consulta",
        },
        {
          id: 4,
          name: "Logística Reversa",
          description: "Processo de retorno de produtos ao ponto de origem.",
          price: "Preço sob consulta",
        },
        {
          id: 5,
          name: "Gestão de Estoques",
          description: "Controle e gestão de estoques de forma otimizada.",
          price: "Preço sob consulta",
        },
        {
          id: 6,
          name: "Logística Internacional",
          description: "Soluções logísticas para operações internacionais.",
          price: "Preço sob consulta",
        },
        {
          id: 7,
          name: "Logística Integrada",
          description: "Integração de diferentes serviços logísticos.",
          price: "Preço sob consulta",
        },
        {
          id: 8,
          name: "Consultoria em Logística",
          description: "Consultoria especializada em melhorias logísticas.",
          price: "Preço sob consulta",
        },
        {
          id: 9,
          name: "Logística de E-commerce",
          description:
            "Soluções logísticas voltadas para o comércio eletrônico.",
          price: "Preço sob consulta",
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
