/* =========================================================
   Brutal Acabamentos — interações do site
   ========================================================= */

// [PREENCHER] Número do WhatsApp com código do país e DDD, só dígitos.
// Exemplo: '5519999999999'. Enquanto estiver vazio, os botões levam à seção Contato.
const WHATSAPP_NUMERO = '';

(function () {
  // Botões de WhatsApp: elementos com data-whatsapp="mensagem inicial"
  const numero = WHATSAPP_NUMERO.replace(/\D/g, '');
  if (numero) {
    document.querySelectorAll('[data-whatsapp]').forEach(function (link) {
      const mensagem = link.getAttribute('data-whatsapp') || '';
      link.href = 'https://wa.me/' + numero + (mensagem ? '?text=' + encodeURIComponent(mensagem) : '');
      link.target = '_blank';
      link.rel = 'noopener';
    });
  }

  // Menu do celular
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu');

  function fecharMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }

  toggle.addEventListener('click', function () {
    const aberto = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(aberto));
    toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', fecharMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      fecharMenu();
      toggle.focus();
    }
  });

  // Sombra no cabeçalho ao rolar
  const header = document.querySelector('.header');
  function atualizarHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', atualizarHeader, { passive: true });
  atualizarHeader();

  // Ano atual no rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
