// Mostra a largura atual da janela (usado na questão 24 para acompanhar
// o momento em que os cards quebram para a linha de baixo).
const elementoLargura = document.getElementById('largura');

function atualizarLargura() {
  elementoLargura.textContent = `${window.innerWidth}px`;
}

if (elementoLargura) {
  atualizarLargura();
  window.addEventListener('resize', atualizarLargura);
}
