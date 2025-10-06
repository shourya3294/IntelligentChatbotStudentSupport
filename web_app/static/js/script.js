function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value;
    inputField.value = "";

    let chatlogs = document.getElementById("chatlogs");
    chatlogs.innerHTML += "<div class='user-message'>" + message + "</div>";

    fetch("/get", {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(msg => {
            chatlogs.innerHTML += "<div class='bot-message'>" + msg.text + "</div>";
        });
    });
}
