<?php
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['name'])) {$name = $_POST['name'];}

$emailsender = 'web@karkas64.ru';


		$to  = "karkas.engels@yandex.ru" ;
		$to .= ",mail@site-a.ru";


// $mes = "Тема: Заказ обратного звонка с сайта!\nТелефон: $phone\n";
$mes = "Заказ обратного звонка с сайта!\nИмя: $name\nТелефон: $phone\n";
$sub='Заказ звонка с сайта KARKAS64.ru'; //сабж

$send = mail ($to,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$emailsender");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
