<?php
	if (isset($_POST['email']) && !empty($_POST['email'])){
		// Pegar o (nome, email, menssagem)
		$name = addslashes($_POST['name']);
		$email = addslashes($_POST['email']);
		$mesage = addslashes($_POST['mesage']);
	}

	//Para quem o contato será enviado e o corpo do email
	$to = "cauaserpa092@gmail.com";
	$subject = "portifolio (novo contato)";
	$body = "Nome: ".$name. "\r\n".
			"Email: ".$email. "\r\n".
			"Menssagem: ".$mesage;
	$header = "From:cauaserpa092@gmail.com"."\r\n".
				"Reply-To:".$email."\r\n".
				"X=Mailer:PHP/".phpversion();

	if(mail($to,$subject,$body,$header)){

		echo ("O email foi enviado com sucesso!");

	}else{

		echo ("O email não pode ser enviado.");

	}


?>
