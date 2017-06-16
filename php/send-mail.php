<!-- <?php
	if(isset($_POST['email'])) {

		$email_to = "hakucostarica@gmail.com";
		$nombre = $_POST['name'];
		$email_subject = "Contacto desde hakuCR";

		if(!isset($_POST['name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['message'])) {
			die();
		}

		$email_message = "Detalles del formulario de contacto:\n\n";
		$email_message .= "Nombre: " . $_POST['name'] . "\n";
		$email_message .= "Email: " . $_POST['email'] . "\n";
		$email_message .= "Mensaje: " . $_POST['message'] . "\n\n";

		$headers = 'From: '.$nombre."\r\n".
		'Reply-To: '.$email_to."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);

	}
?> -->
<?php
	if($_POST){
	    $name = $_POST['name'];
	    $email = $_POST['email'];
	    $message = $_POST['message'];

	    mail("hakucostarica@gmail.com", "Mensaje desde hakuCR:" .$email, $message);
	}
?>