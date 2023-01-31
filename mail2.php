<?php
	if (isset($_POST['subj'])) {$subj = $_POST['subj'];}
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['email'])) {$clientemail = $_POST['email'];}
	if (isset($_POST['message'])) {$message = $_POST['message'];}

	  $emailsender = 'web23@karkas64.ru';

		$to = "karkas64sar@yandex.ru";
		$to .= ",zokrat@yandex.ru" ;



$mes = "Тема: Заявка по проекту $subj \nТелефон: $phone\nИмя: $name";
$sub='Сообщение c сайта karkas64.ru'; //сабж

$send = mail ($to,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$emailsender");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>