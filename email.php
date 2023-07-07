<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Получение данных из POST-запроса
  $requestData = json_decode(file_get_contents('php://input'), true);
  $recipient = $requestData["reply_to"];
  $subject = $requestData["subject"];
  $message = "Здравствуйте, " . $requestData["company_name"] . "\n";
  $message .= $requestData["link1"] . "\r\n";
  $message .= $requestData["link2"] . "\r\n";
  $message .= $requestData["link3"] . "\r\n";

  // Отправка письма на два адреса
  $to = $recipient . ", info@teal.band";
  $headers = "From: info@teal.band" . "\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; // Установка кодировки UTF-8
  if (mail($to, $subject, $message, $headers)) {
    // Отправка ответа
    $response = array('message' => 'Данные успешно обработаны');
    echo json_encode($response);
    exit;
  } else {
    // Ошибка при отправке письма
    $response = array('message' => 'Ошибка при отправке письма');
    echo json_encode($response);
    exit;
  }
}
?>
