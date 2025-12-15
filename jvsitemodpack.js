document.querySelectorAll('.btn-mod').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Mod selecionado: ${btn.innerText}`);
  });
});


document.querySelectorAll('.btn-mod').forEach(botao => {
  botao.addEventListener('click', () => {
    botao.classList.toggle('active');
  });
});