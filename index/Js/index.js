// Função para expandir/recolher o texto "Leia mais" na seção "Sobre Nós"
document.getElementById("read-more").addEventListener("click", function () {
  var moreText = document.getElementById("more-text");
  moreText.style.display =
    moreText.style.display === "none" ? "inline" : "none";
  this.textContent =
    moreText.style.display === "none" ? "Leia mais" : "Leia menos";
});

// Função para validar e submeter o formulário de contato
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
      if (validateEmail(email)) {
        document.getElementById("success-message").style.display = "block";
      } else {
        alert("Por favor, insira um e-mail válido.");
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

// Função para validar o formato do e-mail
function validateEmail(email) {
  var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(String(email).toLowerCase());
}

// Funções para navegar pelas imagens da galeria
var currentImageIndex = 0;
var images = [
  "../assets/images/banner01.jpeg",
  "../assets/images/bnner02.png",
  "../assets/images/banner03.jpeg",
];
var galleryImage = document.querySelector(".gallery-image");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

prevButton.addEventListener("click", function () {
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  updateGalleryImage();
});

nextButton.addEventListener("click", function () {
  currentImageIndex =
    currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  updateGalleryImage();
});

function updateGalleryImage() {
  galleryImage.src = images[currentImageIndex];
}

// Carregar a primeira imagem ao carregar a página
updateGalleryImage();

// Funções para paginar a tabela de serviços
document.addEventListener("DOMContentLoaded", function () {
  const rowsPerPage = 3;
  const table = document.getElementById("services-table");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  const pagination = document.getElementById("pagination");
  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");
  const pageInfo = document.getElementById("page-info");

  let currentPage = 1;
  let totalPages = Math.ceil(rows.length / rowsPerPage);

  function displayPage(page) {
    tbody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageRows = rows.slice(start, end);
    pageRows.forEach((row) => tbody.appendChild(row));
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
  }

  prevPageButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
    }
  });

  nextPageButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
    }
  });

  displayPage(currentPage);
});

// Função para scroll suave ao clicar nos links do menu
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a, .footer-nav a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
});

// Exibe ou oculta o botão "Voltar ao topo" dependendo da posição do scroll
window.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
