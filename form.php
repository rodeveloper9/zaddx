<?php
if (isset($_POST['submit'])) {
    $name    = $_POST["name"];
    $email   = $_POST["email"];
    $number  = $_POST["number"];
    $skype   = $_POST["skype"];
    $comment = $_POST["comment"];
    
    // Multiple recipients sepearte with comma
    $to = 'rohitdeveloper9@gmail.com, ravisvats@gmail.com'; 
    
    // Subject
    $subject = 'Enquiry Email from Zaddx';
    
    // Message
    $message = "Full Name: $name.<br>" . "Email: $email.<br>" . "Number: $number.<br>" . "Skype: $skype.<br>" . "Comment: $comment.<br>";
    
    // To send HTML mail, the Content-type header must be set
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    
    // Additional headers
    $headers[] = 'To: Rohit <rohitdeveloper9@gmail.com>';
    $headers[] = 'From: Enquiry Email <info@zaddx.com>';
    
    // Mail it
    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
        echo 'Mail sent';
    } else
        echo 'mail not sent';
} else
    echo 'Please submit the form';
?>