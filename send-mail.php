<?php
	if($_POST){
	    $name = $_POST['name'];
	    $email = $_POST['email'];
	    $message = $_POST['message'];

	    mail("hakucostarica@gmail.com", "Mensaje desde hakuCR:" .$email, $message);
	}
?>