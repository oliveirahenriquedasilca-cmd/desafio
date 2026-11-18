const form = document.getElementById("loginForm");

const usuario_correto = "CleitonRasta";
const senha_correta = "DiNoSsAuRo231";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  if (usuario === usuario_correto && senha === senha_correta) {
    window.location.href = "sucesso.html";
  } else {
    window.location.href = "falhou.html";
  }
});
