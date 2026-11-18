
  const form = document.getElementById("loginForm");
  const usuario_correto = "CleitonRastajrSixSeven";
  const senha_correta = "6735636sixseven/45/76/34/643";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("senha").value;

    if (user === usuario_correto && pass === senha_correta) {
      document.body.innerHTML = "<h1>Boa Chefin!</h1>";
    } else {
      document.body.innerHTML = "<h1>Errou Chefin!</h1><button onclick='location.reload()'>Tentar de novo</button>";
    }
  });


