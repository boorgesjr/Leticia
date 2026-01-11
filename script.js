const inputNumero = document.getElementById("inputNumero");
const btnAdicionar = document.getElementById("btnAdicionar");


function enviarmsg() {
    const numero = inputNumero.value.trim();

    if (numero !== "") {
        window.open("https://wa.me/" + numero, "_blank");
    }
    else {
        alert("Por favor, insira um número de telefone válido.");
    }
}



btnAdicionar.addEventListener("click", enviarmsg);

inputNumero.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        enviarmsg();
    }
});