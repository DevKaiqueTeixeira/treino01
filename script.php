<?php


$nome = $_POST['nome'];
$numero1 = (float) $_POST['numero1'];
$numero2 = (float) $_POST['numero2'];

$mensagem = "Bem vindo" . $nome;
$resposta = "Manipulando dados PHP e JS";

$soma = $numero1 + $numero2;
echo json_encode([
    'alerta' => $mensagem,
    'pagina' => $resposta,
    'somaTotal' => $soma

]);
