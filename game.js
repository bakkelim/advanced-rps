import { gameResult, getGameResult } from "./gameLogic.js";

const gameChoices = document.querySelectorAll(".game-choice");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const historyDiv = document.getElementById("history");

let playerADamage = 0;
let playerBDamage = 0;
let history = [];

gameChoices.forEach((button) => {
  button.addEventListener("click", () => {
    const playerAChoice = button.getAttribute("data-choice");
    const playerBChoice = ["A", "B", "C", "D", "E", "F"][
      Math.floor(Math.random() * 6)
    ];
    const { result, damageTaken } = getGameResult(playerAChoice, playerBChoice);

    let resultText = "It's a tie!";
    let damageText = "No damage taken.";
    if (result === gameResult.PLAYER_A_WINS) {
      playerBDamage += damageTaken;
      resultText = `You won!`;
      damageText = `Computer took ${damageTaken} damage.`;
    } else if (result === gameResult.PLAYER_B_WINS) {
      playerADamage += damageTaken;
      resultText = `Computer won!`;
      damageText = `You took ${damageTaken} damage.`;
    }

    history.push(
      `You chose ${playerAChoice}, computer chose ${playerBChoice}. ${damageText}`
    );

    resultDiv.textContent = resultText;
    scoreDiv.textContent = `Damage: Player ${playerADamage} - Computer ${playerBDamage}`;
    historyDiv.innerHTML = history.join("<br>");
  });
});
