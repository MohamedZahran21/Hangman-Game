const letters = "abcdefghijklmnopqrstuvwxyz";
const words = ["dog", "cat", "elephant", "giraffe", "javascript", "MySQL"];

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let Letter = document.createTextNode(letter);
    span.appendChild(Letter);
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});
let randomWord = words[Math.floor(Math.random() * words.length)];

let randomWordArray = Array.from(randomWord.toLowerCase());

let lettersGuessContainer = document.querySelector(".letters-guess");
randomWordArray.forEach(letter => {
    let span = document.createElement("span");
    lettersGuessContainer.appendChild(span);
});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDrawing = document.querySelector(".hangman-drawing");


// handle clicking on letters
document.addEventListener("click", (e) => {

    let theStatus = false;
    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");

        //get clicked letter
        let clickedLetter = e.target.innerHTML.toLowerCase();


        randomWordArray.forEach((wordLetter, WordIndex) => {

            if (clickedLetter == wordLetter) {

                theStatus = true;
                guessSpans.forEach((span, spanIndex) => {

                    if (WordIndex === spanIndex) {

                        span.innerHTML = wordLetter;
                    }
                });

            }

        });
        if ([...guessSpans].every(span => span.innerHTML !== "")) {
        
                alert("Congratulations! You guessed the word: " + randomWord);
                lettersContainer.classList.add("finished");
            
        }

        if (theStatus !== true) {
            wrongAttempts++;
            theDrawing.classList.add(`wrong-${wrongAttempts}`);

            if (wrongAttempts === 8) {
                endGame();

                lettersContainer.classList.add("finished");
            }
        }

    }
});
function endGame() {
    alert("Game Over, The Word Is: " + randomWord);
}