var wins = 0;
var losses = 0;
let myLength;
var answerArray = [];
var output = "";
var randomWord = "";
var userGuess = "";
let userGuessArray = [];
var guessesLeft;
var wordBankArray = [
  "violet",
  "mike",
  "charlie",
  "augustus",
  "arthur",
  "willy",
  "veruca",
  "oompa"
];
var updatedAnswer = [];
var letterAlphabet = "abcdefghijklmnopqrstuvwxyz";
var letterArray = letterAlphabet.split("");

//showing items on html website

var guessesDisplayed = document.getElementById("guessesCount");
var winsDisplayed = document.getElementById("winsCount");
var lossesDisplayed = document.getElementById("lossesCount");
var userChoiceDisplayed = document.getElementById("userChoice");


//game stuff
var generateWord = function () {
  const randomIndex = Math.random() * wordBankArray.length
  return wordBankArray[Math.floor(randomIndex)];
}

var displayGame = function (letters) {
  document.getElementById("game").innerHTML = letters.join(' ');
}

const showBlanks = function () {
  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";

  }
  displayGame(answerArray);
};

const findAllIndexes = function (str, letter) {
  var indexes = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) indexes.push(i);
  }
  return indexes;
}

//added stuff works??
const characterImage = function () {
  if (randomWord === "violet") {
    document.getElementById("myImg").innerHTML = "<img src='https://vignette.wikia.nocookie.net/moviedatabase/images/3/37/Violet_Beauregarde.jpg/revision/latest?cb=20161108192001'/>";

    console.log("yes violet")

  }
  if (randomWord === "mike") {
    document.getElementById("myImg").innerHTML = "<img src='https://cdn.newsapi.com.au/image/v1/86b0482e1cabd025b42fdc426ab756e3?width=316'/>";

    console.log("yes mike")
  }
  if (randomWord === "charlie") {
    document.getElementById("myImg").innerHTML = "<img src='https://vignette.wikia.nocookie.net/charlieandthechocolatefactoryfilm/images/e/e8/Willy_Wonka_%26_the_Chocolate_Factory_Charlie_Bucket.jpg/revision/latest?cb=20180926224802'/>";

    console.log("yes charlie")
  }
  if (randomWord === "augustus") {
    document.getElementById("myImg").innerHTML = "<img src='https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/38556/1522363964-29369-6553/Augustus_20Gloop_large.jpg'/>";

    console.log("yes augustus")
  }
  if (randomWord === "arthur") {
    document.getElementById("myImg").innerHTML = "<img src='https://vignette.wikia.nocookie.net/villains/images/e/e0/Slugworth.jpg/revision/latest/scale-to-width-down/250?cb=20130811233952'/>";

    console.log("yes arthur")
  }
  if (randomWord === "willy") {
    document.getElementById("myImg").innerHTML = "<img src='https://uproxx.files.wordpress.com/2018/02/willy-wonka.jpg?quality=95&w=650'/>";

    console.log("yes willy")
  }
  if (randomWord === "veruca") {
    document.getElementById("myImg").innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYey7EhEFaxStuRH_r9SczenbfbGvUm5JkqKqlyI-THevB9Du8'/>";

    console.log("yes veruca")
  }
  if (randomWord === "oompa") {
    document.getElementById("myImg").innerHTML = "<img src='https://static2.stuff.co.nz/1372718322/467/8867467.jpg'/>";

    console.log("yes oompa")
  }
}

//initiate the game!

var initGame = function () {
  userGuessArray = [];
  indexes = [];
  updatedAnswer = [];
  answerArray = [];
  guessesLeft = 15;
  randomWord = generateWord();
  guessesCount.textContent = "Guesses Left: " + guessesLeft;
  userChoice.textContent = "Your Guesses: " + userGuessArray;
  winsCount.textContent = "Wins: " + wins;
  lossesCount.textContent = "Losses: " + losses;
  displayGame(answerArray);
  characterImage();
  showBlanks();

};

initGame();


document.onkeyup = function (event) {
  var userGuess = event.key;

  // Determines which key was pressed.
  if (letterArray.includes(userGuess) === true) {

    userGuessArray.push(userGuess);
    userChoice.textContent = "Your Guesses: " + userGuessArray;
    guessesLeft--;
    guessesCount.textContent = "Guesses Left: " + guessesLeft;

    const indexesOfLetter = findAllIndexes(randomWord, userGuess);

    if (indexesOfLetter.length > 0) {
      indexesOfLetter.forEach(function (index) {
        answerArray[index] = userGuess;

        displayGame(answerArray);
      })

      if (randomWord === answerArray.join('')) {

        alert("You won the golden ticket!")
        answerArray = [];
        displayGame(answerArray);
        wins++;
        document.getElementById('winnerSong').play();
        winsCount.textContent = "Wins: " + wins;
         document.getElementById("goldenTicket").innerHTML = "<img src='https://image.invaluable.com/housePhotos/profilesinhistory/79/428979/H3257-L48773970.jpg'/>";
        initGame();
      }
    }

    if (guessesLeft === 0) {
      alert('You didnt get the golden ticket!');
      losses++;
      losses.textContent = "Losses: " + lossesCount;
      initGame();
    }

  }
  else {
    alert("wrong input, try again");
  }
};
