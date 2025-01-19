let score = 0;
let lives = 3;
const correctWord = "BLAST";

function submitGuess() {
    const predictionInput = document.getElementById("prediction");
    const userGuess = predictionInput.value.toUpperCase();
    const boxes = document.querySelectorAll(".box");
    document.querySelector(".reset-button").style.display = "inline-block";
    predictionInput.value = "";
    let correctGuess = false;

    if (userGuess.length > 1) {
        if (userGuess === correctWord) {
            boxes.forEach((box, index) => {
                const letter = correctWord[index];
                box.classList.add("guessed");
                box.innerHTML = `<img src="${letter}.svg" alt="${letter}" style="width: 100px; height: 100px; object-fit: cover;">`;
            });
            score = 100;
            document.querySelector(".score").textContent = `Score: ${score}`;
            alert("Congratulations! You predict correct word. You won!");
        } else {
            alert("Game Over! You predict wrong word. You Lost! Your score: " + score);
        }
        return;
    }

    boxes.forEach((box) => {
        const letter = box.getAttribute("data-letter");
        if (letter === userGuess && !box.classList.contains("guessed")) {
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

    const allBoxesFilled = Array.from(boxes).every((box) =>
        box.classList.contains("guessed")
    );

    if (allBoxesFilled) {
        boxes.forEach((box, index) => {
            const letter = correctWord[index];
            box.innerHTML = `<img src="${letter}.svg" alt="${letter}" style="width: 100px; height: 100px; object-fit: cover;">`;
        });
        alert("Congratulations! You won!");
        return;
    }

    if (lives === 0) {
        alert("Game Over! You Lost! Your score: " + score);
        return;
    }
}

function resetGame() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.classList.remove("guessed");
        box.innerHTML = "";
    });
    score = 0;
    lives = 3;
    document.querySelector(".score").textContent = "Score: 0";
    document.querySelector(".lives").textContent = "Lives: ❤️ ❤️ ❤️";
    document.querySelector(".reset-button").style.display = "none";
}