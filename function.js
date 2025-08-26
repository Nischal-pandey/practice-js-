let message; // declared globally

function showMessage() {
  message = "Hello, I'm JavaScript!";
  console.log(message);
}

showMessage(); // ✅ Shows the message
console.log(message); // ✅ Also works now