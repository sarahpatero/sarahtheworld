<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data and sanitize it
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validate the form data (basic example)
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required. Please go back and fill out the form completely.";
        exit();
    }

    // Set up the email details
    $to = "spatero@umich.edu"; // Replace with your email address
    $subject = "New Contact Message from $name";
    $body = "You have received a new message from your contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Set headers for the email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // If email is sent, show a success message and redirect (optional)
        header("Location: thank-you.html"); // Redirect to a thank-you page (make sure to create this page)
        exit(); // Ensure the script stops after redirect
    } else {
        // If there was an issue sending the email
        echo "Oops! Something went wrong and we couldn't send your message. Please try again later.";
    }
}
?>
