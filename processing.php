<?php
$output = 'Привет! ';
if ($_SERVER['REMOTE_ADDR']) {
  $output .= 'Твой IP адрес: '. $_SERVER['REMOTE_ADDR'];
}
else {
 $output .= 'Твой IP адрес неизвестен.';
}
echo $output;

?>