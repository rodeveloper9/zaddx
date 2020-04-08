<?php
  if(isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
  $name = $email =  $skype = $number = $comment = "";

  $name = $_POST["name"];
  $email = $_POST["email"];
  $skype = $_POST["skype"];
  $number = $_POST["number"];
  $comment = $_POST["comment"];

  $email_from = 'rohit@technogramsolutions.com';//<== update the email address
  $email_subject = "Enquiry Form from Zaddx";
  $email_body = 
    "Full Name: $name.\n".
    "Email: $email.\n". 
    "Skype: $skype.\n". 
    "Number: $number.\n". 
    "Comment: $comment.\n".
    
  $to = "rohitdeveloper9@gmail.com;";//<== update the email address
  $headers[] = "From: $email_from";
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859-1';
  ini_set("SMTP","smtp.gmail.com");
  ini_set("smtp_port","25");
  ini_set('sendmail_from', 'rohitdeveloper9@gmail.com');

//Send the email!
$mailData = mail($to,$email_subject,$email_body,implode("\r\n", $headers));
if( $mailData == true ) {
  echo "Mail sent successfully...";
}else {
  echo "Mail could not be sent...";
}
//done. redirect to thank-you page.
// header('Location: thank-you.html');


// Function to validate against any email injection attempts
// function IsInjected($str)
// {
//   $injections = array('(\n+)',
//               '(\r+)',
//               '(\t+)',
//               '(%0A+)',
//               '(%0D+)',
//               '(%08+)',
//               '(%09+)'
//               );
//   $inject = join('|', $injections);
//   $inject = "/$inject/i";
//   if(preg_match($inject,$str))
//     {
//     return true;
//   }
//   else
//     {
//     return false;
//   }
// }	

}

else echo "error; you need to submit the form!";
?>
      