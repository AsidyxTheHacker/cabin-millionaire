// RESET QUESTION COLORS
let allAns = [ansA, ansB, ansC, ansD];
function styleReset() {
    allAns.forEach(el => {
        el.style.backgroundImage = '';
        el.style.animation = '';
        el.style.zIndex = '';
        el.style.opacity = 1;
    })
};

// CREATE QUESTIONS FUNCTION
function question(question, a, b, c, d, correct, halfOne, halfTwo) {
    answerReset()
    let questionBox = document.querySelector('.question');
    questionBox.innerText = question;
    questionBox.style.animation = 'fadeInAnimation 3s ease-in-out';
    let answerOne = document.getElementById('answer-a');
    let answerOneBox = document.getElementById('ansA');
    answerOne.innerText = a;
    let answerTwo = document.getElementById('answer-b');
    let answerTwoBox = document.getElementById('ansB');
    answerTwo.innerText = b;
    let answerThree = document.getElementById('answer-c');
    let answerThreeBox = document.getElementById('ansC');
    answerThree.innerText = c;
    let answerFour = document.getElementById('answer-d');
    let answerFourBox = document.getElementById('ansD');
    answerFour.innerText = d;

    if(correct == 1) {
        answerOneBox.classList.add('correct');
        answerOneBox.classList.remove('answer');
    } else if(correct == 2) {
        answerTwoBox.classList.add('correct');
        answerTwoBox.classList.remove('answer');
    } else if(correct == 3) {
        answerThreeBox.classList.add('correct');
        answerThreeBox.classList.remove('answer');
    } else if(correct == 4) {
        answerFourBox.classList.add('correct');
        answerFourBox.classList.remove('answer');
    };
    if(halfOne == 1){
        answerOneBox.classList.add('half');
    } else if(halfOne == 2){
        answerTwoBox.classList.add('half');
    } else if(halfOne == 3){
        answerThreeBox.classList.add('half');
    } else if(halfOne == 4){
        answerFourBox.classList.add('half');
    }
    if(halfTwo == 1){
        answerOneBox.classList.add('half');
    } else if(halfTwo == 2){
        answerTwoBox.classList.add('half');
    } else if(halfTwo == 3){
        answerThreeBox.classList.add('half');
    } else if(halfTwo == 4){
        answerFourBox.classList.add('half');
    }
    styleReset();
}

function answerReset(){
    allAns.forEach(el => {
        el.classList.add('answer');
        el.classList.remove('correct');
        el.classList.remove('half');
    });
};

function questionOne() {
    question(`What game is Wheelin' Dealin' Ethan's theme song from?`, `Doom`, `Battlefield`, `Call of Duty`, `Grand Theft Auto`, 1, 3, 4);
};
function questionTwo() {
    question(`What was the official title for the first HKW ppv?`, `Collision Course`, `HKW Havoc`, `Wrestlefest`, `Thunderstruck`, 4, 1, 3);
};
function questionThree() {
    question(`Which wrestler did Street Bully find in his jail cell?`, `Ethan`, `Juggernaut`, `Captain Baby`, `Captain Imbecile`, 4, 2, 3);
};
function questionFour() {
    question(`What was the screen-name of Ethan's date from 'The Big Date'?`, `Sergeant Dan`, `Daniella`, `Danielle`, `Dani`, 3, 4, 2);
};
function questionFive() {
    question(`Which character was introduced in the first episode of season two?`, `Guitar Guy`, `Street Bully`, `Grandpa Dan`, `Captain Baby`, 2, 1, 4);
};
function questionSix() {
    question(`How many episodes were in season one of HKW?`, `4`, `6`, `5`, `7`, 2, 1, 3);
};
function questionSeven() {
    question(`Who did Doug lose the 'Gauntlet Belt' to?`, `Trashman`, `The Phantom`, `Iceman`, `Guitar Guy`, 3, 1, 4);
};
function questionEight() {
    question(`Which episode of season two did Wheelin' Dealin' Ethan get his haircut?`, `Episode 2`, `Episode 4`, `Episode 5`, `Episode 3`, 4, 3, 1);
};
function questionNine() {
    question(`Which character was murdered in the episode 'Murder Mystery'?`, `Sergeant Dan`, `Fortnite Fiend`, `Guitar Guy`, `Doug`, 2, 4, 3);
};
function questionTen() {
    question(`Which episode did the wretler 'Doug' debut?`, `Where's My Belt At?`, `HKW TURKLABERSH EP6`, `Murder Mystery`, `The Return?`, 3, 1, 4);
};
function questionEleven() {
    question(`What was the opening match for 'Thunderstruck'?`, `King Raven vs Wolf`, `Guitar Guy vs Guitar Bruh`, `Cop Guy vs Street Bully`, `Sergeant Dan vs Guitar Guy`, 1, 3, 4);
};
function questionTwelve() {
    question(`What was the current last match of HKW?`, `Guitar Guy vs Sergeant Dan`, `Trashman vs Guitar Bruh`, `King Raven vs Wolf`, `Doug vs Iceman`, 2, 1, 3);
};
function questionThirteen() {
    question(`How many subscribers does HKW currently have?`, `26`, `19`, `23`, `21`, 3, 1, 2);
};
function questionFourteen() {
    question(`What is Sergeant Dan's favorite number?`, `2`, `4`, `7`, `8`, 1, 3, 4);
};
function questionFifteen() {
    question(`What is the name of Juggernaut's stuffed animal friend?`, `Shnarf`, `Marvin`, `Johnny`, `Willy`, 4, 1, 2);
};