<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Exemplo Interação PHP/JS</title>
</head>

<body>
    <h1>Executando PHP via JavaScript</h1>
    <h3>Digite seu nome: <input id="nome" type="text"></h3>

    <br>
    <h3>Soma : <input id="numero1" type="number"> - <input id="numero2" type="number"></h3>

    <br>
    <br>
    <button onclick="executarPHP()">Executar PHP</button>
    <button onclick="limpar()">Limpar</button>



    <div id="resultado"></div>
    <div id="resultadoSoma"></div>

    <script src="javascript.js"></script>
</body>

</html>