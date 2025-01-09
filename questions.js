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
    question(`What is the name of the boys' groupchat?`, `Tim's Bathroom`, `Jason Fanclub`, `Penis Meeting`, `Money Town`, 2, 1, 3);
};
function questionTwo() {
    question(`Who was the artist behind the masterpiece "Ruan Forrester"?`, `Jason`, `Andrew`, `Tim`, `Adam`, 1, 3, 4);
};
function questionThree() {
    question(`Which of these is the name of a wrestler on HKW?`, `Pogo Joe`, `Mr. Baby`, `King Raven`, `Wheelin Dealin Ian`, 3, 1, 2);
};
function questionFour() {
    question(`What state is the Super Smash Con tournament hosted in?`, `New Jersey`, `Virginia`, `New York`, `Maryland`, 2, 4, 3);
};
function questionFive() {
    question(`What year was the groups first trip to Mount Tammany?`, `2018`, `2019`, `2020`, `2017`, 4, 1, 3);
};
function questionSix() {
    question(`Which of these towns has Tim not had an address?`, `Toms River`, `Bayville`, `Beachwood`, `Lacey`, 4, 1, 2);
};
function questionSeven() {
    question(`Which of these slasher killers is Tim's favorite?`, `The Joker`, `Jason Voorhees`, `Michael Myers`, `Ghostface`, 2, 1, 3);
};
function questionEight() {
    question(`Who won the most points from RFNTNOTN Season One?`, `Ethan`, `Andrew`, `Adam`, `Tim`, 3, 1, 4);
};
function questionNine() {
    question(`How did the boys celebrate Zak's 21st birthday?`, `Tim's House`, `Applebee's`, `Karaoke`, `Bowling`, 3, 4, 2);
};
function questionTen() {
    question(`Which of these animals was a former pet of Adam's?`, `Fish`, `Raccoon`, `Squirrel`, `Parrot`, 3, 2, 4);
};
function questionEleven() {
    question(`Which one of these isn't the name of one of Zak's friends?`, `Bird`, `Bobo`, `Weirdo`, `Frodo`, 2, 1, 4);
};
function questionTwelve() {
    question(`What was the name of HKW's first PPV episode?`, `Lightning Road`, `Collision Course`, `Thunderstruck`, `Wrestle Time`, 3, 1, 4);
};
function questionThirteen() {
    question(`Which of these usernames/tags has not been used by Ryan?`, `Micro`, `Ratio`, `Spraze`, `Blaze`, 4, 3, 1);
};
function questionFourteen() {
    question(`Which season was Tim's family featured on 'The Supernanny'?`, `Season 7`, `Season 8`, `Season 4`, `Season 6`, 1, 3, 4);
};
function questionFifteen() {
    question(`Which of these people appeared in Adam's first Minecraft video?`, `Jason`, `David`, `Tim`, `Keon`, 1, 3, 4);
};