export default {
  data() {
    return {
      images: [
        "https://meunegocio.uol.com.br/blog/wp-content/uploads/2020/04/aprenda-a-colocar-um-site-profissional-no-ar-em-menos-de-24-horas-1465325427192_600x320.png",
        "https://assets.turbologo.com/blog/pt/2021/09/23101149/place-logo-on-website.png",
        "https://assets.turbologo.com/blog/pt/2018/11/19133959/company-logo.png",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    previousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
