<?php

function input_validation($data)
{
  if(!empty($data)){
    return trim($data);
  }
}

$to = 'maxsimvoid@yandex.ru, hramoff@finitaprod.ru';
$subject = "Заявка с вашего сайта finitaprod";

$message = input_validation("Имя " . $_POST['name']) . "<br>";
$message .= input_validation("Телефон " . $_POST['phone']) . "<br>";
$message .= input_validation("Email " . $_POST['email']) . "<br>";
$message .= input_validation("Описание заказа " . $_POST['message']) . "<br>";
$headers = 'Content-type: text/html; charset=utf-8';

mail($to,$subject,$message,$headers);

header("Location: /");