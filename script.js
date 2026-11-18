document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value;

        if (usuario === "MaximusRespeito@gmail.com" && senha === "A121@!#*#)wq9!#)sa{?/çg#3184912832@*&6") {

            window.location.href = "menu.html";

        } else {

            window.location.href = "erro.html";

        }

    });

});

