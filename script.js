// script.js



document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});


function onScroll() {
  const icons = document.querySelectorAll('.icon');
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      icon.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', onScroll);
// Função para rolar suavemente até o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Função para controlar a visibilidade   do botão flutuante
function toggleScrollToTopBtn() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const intervalTime = 3000;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex === carouselItems.length) {
            currentIndex = 0;
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = 'translateX(0)';
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out';
            }, 50); // Adicione um pequeno atraso para garantir que a transição seja reiniciada
        } else {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    setInterval(showNextSlide, intervalTime); // Muda a foto a cada 3 segundos
});

document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.textocarousel h1');
  const text = " De um simples traço à FROMAS INOVADORAS!";
  let charIndex = 0;
  const typingSpeed = 100; // Velocidade de digitação em milissegundos

  function type() {
    if (charIndex < text.length) {
      textElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    }
  }

  // Iniciar o efeito de digitação
  type();
});
