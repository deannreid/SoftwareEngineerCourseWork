<php 
if ($_SERVER["REQUEST_METHOD"] =="POST") {

    if(
        !empty($_POST["name"]) 
        && !empty($_POST["email"]) 
        && !empty($_POST["message"])
    ) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $recipient = "test@test.com";
        $subject = "Contact Form";
        $body = "Name: $name \n Email: $email \n Message: $message";
        $mailheader = "From: $email \r\n";

        if (mail($recipient,$subject,$body,$mailheader)) {
            echo "Thank You!";
        } else {
            echo "Error: Message not sent!";
        }
    }
}
?>