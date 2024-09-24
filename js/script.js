const glossarioItems = document.querySelectorAll('.glossario');

glossarioItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const popup = document.createElement('div');
    popup.classList.add('glossario-popup');
    popup.textContent = item.title; 

    popup.style.position = 'absolute';
    popup.style.top = `${item.offsetTop + item.offsetHeight}px`;
    popup.style.left = `${item.offsetLeft}px`;

    document.body.appendChild(popup);
  });

  item.addEventListener('mouseout', () => {
    const popup = document.querySelector('.glossario-popup');
    if (popup) {
      document.body.removeChild(popup);
    }
  });
});


// Glossário Interativo
const glossarioTermos = document.querySelectorAll('.glossario');

glossarioTermos.forEach(termo => {
  termo.addEventListener('click', () => {
    termo.classList.toggle('ativo'); // Alterna a classe 'ativo'
  });
});

// Aguarde o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
  const observer = lozad();
  observer.observe();       

  // Função para o efeito de máquina de escrever
  function typeWriterEffect(el, speed) {
    let text = el.textContent;
    el.textContent = ''; 

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }

  const title = document.getElementById('titulo-principal');
  typeWriterEffect(title, 80); 

  // Menu Hambúrguer
  const btnMenu = document.getElementById('btn-menu');
  const menuNavegacao = document.getElementById('menu-lista'); // Variável correta!

  // Verifica se o botão do menu existe
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      btnMenu.classList.toggle('aberto');
      menuNavegacao.classList.toggle('aberto'); // Usamos a variável correta aqui! 
    });
  }
});