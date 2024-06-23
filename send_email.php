<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $assunto = htmlspecialchars($_POST['assunto']);
    $mensagem = htmlspecialchars($_POST['mensagem']);
    
    // O e-mail para onde a mensagem será enviada
    $para = "gustavodevse@gmail.com";
    $assunto_email = "Nova mensagem do formulário de contato: " . $assunto;
    
    // Mensagem do e-mail
    $mensagem_email = "
    Nome: $nome\n
    Email: $email\n
    Telefone: $telefone\n
    Assunto: $assunto\n
    Mensagem: \n$mensagem
    ";
    
    // Cabeçalhos do e-mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Envia o e-mail
    if (mail($para, $assunto_email, $mensagem_email, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem, tente novamente mais tarde.";
    }
} else {
    echo "Método de solicitação inválido.";
}
?>
