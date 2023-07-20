<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate the data (perform necessary checks)

    // Prepare email content
    $to = 'kosio100898@gmail.com';  // Recipient's email address
    $subject = 'New Message from Contact Form';  // Subject of the email
    $body = "Name: $name\nEmail: $email\n\n$message";  // Message content

    // Additional headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send the email
    $mailSent = mail($to, $subject, $body, $headers);

    if ($mailSent) {
        echo 'Email sent successfully!';
    } else {
        echo 'Failed to send email.';
    }
}
?>