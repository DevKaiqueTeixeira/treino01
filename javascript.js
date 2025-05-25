function executarPHP() {
    const nome = document.getElementById('nome').value;
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    if (nome == "") {
        alert("Digite nome valido");
    } else {
        fetch('script.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'nome=' + encodeURIComponent(nome) +
                '&numero1=' + encodeURIComponent(numero1) +
                '&numero2=' + encodeURIComponent(numero2)
        })

            .then(response => response.json())
            .then(data => {


                alert(data.alerta);
                document.getElementById('resultado').innerHTML = data.pagina;

                document.getElementById('resultadoSoma').innerHTML = data.somaTotal;

            })
            .catch(error => console.error('Erro:', error));

    }

}

function limpar() {

    document.getElementById('resultado').innerHTML = "";

    document.getElementById('resultadoSoma').innerHTML = "";

    document.getElementById('nome').value = "";
}