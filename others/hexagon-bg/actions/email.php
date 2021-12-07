<?php

  if (isset($_POST(['email']) && !empty($_POST(['email'])))) {
    $nome = addslashes($_POST(['firstname']));
    $sobrenome = addslashes($_POST(['lastname']));
    $email = addslashes($_POST(['email']));
    $projeto = addslashes($_POST(['project']));
    $mensagem = addslashes($_POST(['message']));

    $to = "carlos@lberto.eti.br";
    $subject = "Contato - Site ETI: ".$projeto
    $body = "Nome: ".$nome." ".$sobrenome."\r\n"
            "Email: ".$email."\r\n"
            "Mensagem: ".$mensagem;
    $header = "From: carlos@lberto.eti.br"."\r\n"
             ."Reply-To: ".$email."\r\n"
             ."X=Mailer:PHP/".phpversion();

    if (mail($to, $subject, $body, $header)) {
      echo("Email enviado com sucesso!");
    } else {
      echo("O email não pode ser enviado...");
    }
  }

?>