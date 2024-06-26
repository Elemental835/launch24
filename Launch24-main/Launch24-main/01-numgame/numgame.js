const guess = document.getElementById("guess");
const report = document.getElementById("report");

MaxInput = prompt("Enter what you wish to be your max");
MinInput = prompt("Enter what you wish to be your minimum");
if (MinInput >= MaxInput) {
    MinInput = prompt("Has to be smaller than max, enter min");
}

let MINNUM = parseInt(MinInput);
let MAXNUM = parseInt(MaxInput);


let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.max = MAXNUM;

    secret = Math.random();
    let range = MAXNUM - MINNUM;
    secret = secret * range;
    secret = secret + MINNUM;
    secret = Math.floor(secret);
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!

    if (myGuess == secret) {
        report.innerHTML = `${myGuess} is correct!!!`;
        document.body.style.backgroundColor = "lightgreen"
        myConfetti({
            particleCount: 1000,
            spread: 250
        })
    } else if (myGuess < secret) {
        report.innerHTML = `${myGuess} is TOO SMALL`;
    } else {
        report.innerHTML = `${myGuess} is TOO BIG`;
    }

}

function pageReload() {
    window.location.reload(true);
}