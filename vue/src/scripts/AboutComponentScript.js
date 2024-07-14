export default {
  name: "AboutComponent",
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleReadMore() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
