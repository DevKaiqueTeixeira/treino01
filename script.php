<?php
$nome = "Kaique";

$mensagem = "Bem vindo" . $nome;
$resposta = "Manipulando dados PHP e JS";


$numero1 = 10;
$numero2 = 20;

$soma = $numero1 + $numero2;
echo json_encode([
    'alerta' => $mensagem,
    'pagina' => $resposta,
    'somaTotal' => $soma

]);
