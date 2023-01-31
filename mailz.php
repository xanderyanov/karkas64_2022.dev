<?php
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['name'])) {$name = $_POST['name'];}

	$emailsender = 'web23@karkas64.ru';

	$to = "karkas64sar@yandex.ru";
	$to .= ",zokrat@yandex.ru" ;



	$mes = "Тема: Заказ обратного звонка c кнопки в шапке сайта \nТелефон: $phone\nИмя: $name";
	$sub='Заказ обратного звонка c сайта karkas64.ru'; //сабж

	$send = mail ($to,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$emailsender");

	ini_set('short_open_tag', 'On');
	header('Refresh: 3; URL=index.html');
?>