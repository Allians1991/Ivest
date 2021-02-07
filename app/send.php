<?php
$name = htmlspecialchars ($_POST['name']);
$tel = htmlspecialchars ($_POST['tel']);
$email = htmlspecialchars ($_POST['email']);
$tarif = htmlspecialchars ($_POST['tarif']);

// Формируем заголовки письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";
$headers .= "From: Заявка с artemeivin.ru <arvin@admin.info>\r\n";
$headers .= "Reply-To: arvin@admin.info\r\n";

// Составляем текст письма админу
$message = "<h3>Запись на курс</h3>
<p>Имя: $name</p>
<p>Телефон: $tel</p>
<p>Выбран тариф: $tarif</p>
<p>E-mail: $email</p>";

// отсылаем письмо админу
mail( "becs@bk.ru", "Заявка с artemeivin.ru", $message, $headers );
// mail( "allians19@yandex.ru", "Заявка с artemeivin.ru", $message, $headers );

?>