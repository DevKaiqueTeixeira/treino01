function executarPHP() {

    fetch('script.php')

        .then(response => response.json())
        .then(data => {
            alert(data.alerta);
            document.getElementById('resultado').innerHTML = data.pagina;
            var soma = data.somaTotal + 10;
            document.getElementById('resultadoSoma').innerHTML = soma;
        })
        .catch(error => console.error('Erro:', error));
}

function limpar() {

    document.getElementById('resultado').innerHTML = "";

    document.getElementById('resultadoSoma').innerHTML = "";
}