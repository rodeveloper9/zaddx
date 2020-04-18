<?php
if (isset($_POST['submit'])) {
    $type    = $_POST["offer"];
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
    if ($type === 'offer') {
      $message = "This mail is from Offer". "Email Id: $email.<br>" ;
    }
    else {
      $message = "Full Name: $name.<br>" . "Email: $email.<br>" . "Number: $number.<br>" . "Skype: $skype.<br>" . "Comment: $comment.<br>";
    };
    
    
    // To send HTML mail, the Content-type header must be set
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    
    // Additional headers
    $headers[] = 'To: Rohit <rohitdeveloper9@gmail.com>';
    $headers[] = 'From: Zaddx Enquiry <info@zaddx.com>';
    
    // Mail it
    // if (mail($to, $subject, $message, implode("\r\n", $headers))) {
    //   header("Location: success.html");
    // } else
    //     echo 'Please try after sometime';
} else
    echo 'Please submit the form';
?>