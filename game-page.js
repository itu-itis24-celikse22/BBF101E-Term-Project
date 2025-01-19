let score = 0;
let lives = 3;

function submitGuess() {
    const predictionInput = document.getElementById("prediction");
    const guessedLetter = predictionInput.value.toUpperCase();
    const boxes = document.querySelectorAll(".box");
    document.querySelector(".reset-button").style.display = "inline-block";
    predictionInput.value = "";
    let correctGuess = false;

    boxes.forEach((box) => {
        const letter = box.getAttribute("data-letter");
        if (letter === guessedLetter && !box.classList.contains("guessed")) {
            box.classList.add("guessed");
            box.innerHTML = `<img src="${letter}.svg" alt="${letter}" style="width: 100px; height: 100px; object-fit: cover;">`;
            correctGuess = true;}
    });

    if (correctGuess) {
        score = score + 20;
    } else {
        lives = lives - 1;
    }

    document.querySelector(".score").textContent = `Score: ${score}`;
    document.querySelector(".lives").textContent = `Lives: ${"❤️ ".repeat(lives)}`;

    if (lives === 0) {
        alert("Game Over! You Lost! Your score: " + score);
        resetGame();
    }
}

function resetGame() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundImage ="";
    });
    score = 0;
    lives = 3;
    document.querySelector(".score").textContent = "Score: 0";
    document.querySelector(".lives").textContent = "Lives: ❤️ ❤️ ❤️";
    document.querySelector(".reset-button").style.display = "none";
}