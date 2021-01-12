<?php
$name = htmlspecialchars ($_POST['name']);
$tel = htmlspecialchars ($_POST['tel']);
$email = htmlspecialchars ($_POST['email']);

// Формируем заголовки письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";
$headers .= "From: artemenglish.com <arvin@admin.info>\r\n";
$headers .= "Reply-To: arvin@admin.info\r\n";

// Составляем текст письма админу
$message = "<h3>Запись на курс</h3>
<p>Имя: $name</p>
<p>Телефон: $tel</p>
<p>E-mail: $email</p>";

// отсылаем письмо админу
mail( "kahaha5761@majorsww.com", "Заявка с artemenglish.com", $message, $headers );
// mail( "allians19@yandex.ru", "Заявка с artemenglish.com", $message, $headers );

?>