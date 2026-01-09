<?php

require '../public/PHPMailer-5.2/PHPMailerAutoload.php';
echo '<script type="text/javascript" src="js/jquery.js"></script>';
echo '<script type="text/javascript" src="js/fontawasone-5.0.0.js"></script>';
echo '<script type="text/javascript" src="js/sweetalert2.min.js"></script>';
echo '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">';
echo '<link rel="stylesheet" href="css/sweetalert2.min.css">';

$mail = new PHPMailer;

$name = $_POST['user-name'];
$userMail = $_POST['user-email'];
$comment = $_POST['user-comment'];

$mail->SMTPDebug = 0;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'abejasmeliponassitioweb@gmail.com';                 // SMTP username
$mail->Password = 'Gearsofwar98.';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('abejasmeliponassitioweb@gmail.com', 'Abejas Meliponas sitio web');
$mail->addAddress('jordan.castillo@ucr.ac.cr');
$mail->addAddress('dennis.barquerobejarano@ucr.ac.cr');// Add a recipient 
$mail->addAddress('gerardo.perez@ucr.ac.cr');// Add a recipient 
$mail->isHTML(true);                                  // Set email format to HTML

$message = "Este mensaje fue enviado por el usuario: " . $name . "<br>";
$message .= "El e-mail del usuario es: " . $userMail . "<br>";
$message .= "El comentario es: " . "<br>";
$message .= $comment . "<br>";
$message .= "<br>";
$message .= "<br>";
$message .= "Enviado el " . date('d/m/Y', time()) . "<br>";
$message = utf8_decode($message);

$mail->Subject = "Comentarios del sitio web Abejas meliponas de la Sede del Atlántico";
$mail->Body = $message;

if (!$mail->send()) {
    echo '
    <script type="text/javascript">
Swal.fire({
  icon: "error",
  title: "Ha ocurrido un error",
  text: "Intentelo de nuevo",
}).then(function() {
    window.location = "../index.php?controlador=PostComments&accion=mostrar";
});
</script>
';
} else {
    echo '
    <script type="text/javascript">
 $(document).ready(function(){     
Swal.fire(
  "¡Muchas gracias por tu comentario!",
  "Comentario enviado",
  "success"
).then(function() {
    window.location = "../index.php?controlador=PostComments&accion=mostrar";
});
})
</script>
';
}



?>
