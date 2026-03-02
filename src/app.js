import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    const suits = ["heart", "diamond", "spade", "club"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    const icons = {
        heart: "♥",
        diamond: "♦",
        spade: "♠",
        club: "♣"
    };

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    const card = document.getElementById("card");
    const topSuit = document.getElementById("top-suit");
    const number = document.getElementById("number");
    const bottomSuit = document.getElementById("bottom-suit");

    card.classList.add(randomSuit);

    topSuit.innerHTML = icons[randomSuit];
    bottomSuit.innerHTML = icons[randomSuit];
    number.innerHTML = randomValue;
};


