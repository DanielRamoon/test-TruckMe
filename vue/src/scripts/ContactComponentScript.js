export default {
  name: "ContactFormComponent",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formErrors: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    },
  },
};
