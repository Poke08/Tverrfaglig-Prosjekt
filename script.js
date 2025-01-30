// script.js
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("newsletter-message").innerText = "Takk for at du meldte deg på!";
});

function addGame() {
    let gameInput = document.getElementById("game");
    let gameName = gameInput.value.trim();
    if (gameName) {
        let li = document.createElement("li");
        li.textContent = gameName;
        document.getElementById("game-list").appendChild(li);
        gameInput.value = "";
    }
}