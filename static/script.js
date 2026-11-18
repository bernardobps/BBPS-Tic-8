
function calcularSoma() {
    calcular("/api/soma");
}

function calcularSubtracao() {
    calcular("/api/subtracao");
}

function calcularMultiplicacao() {
    calcular("/api/multiplicacao");
}

function calcularDivisao() {
    calcular("/api/divisao");
}

function calcular(url) {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    if (v1 === "" || v2 === "") {
        document.getElementById("resultado").innerText =
            "Digite os dois números!";
        return;
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            valor1: Number(v1),
            valor2: Number(v2)
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText =
            "Resultado: " + data.resultado;
    })
    .catch(error => {
        document.getElementById("resultado").innerText =
            "Erro ao calcular!";
    });
}
