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
    question(`What item is used to breed cows?`, `Seeds`, `Wheat`, `Carrots`, `Apples`, 2, 1, 3);
};
function questionTwo() {
    question(`What is the name of Minecraft's original main character?`, `Steve`, `Alex`, `Bryan`, `Notch`, 1, 3, 4);
};
function questionThree() {
    question(`Which of these Minecraft parodies did CaptainSparklez not make?`, `TNT`, `Revenge`, `Don't Mine at Night`, `Minecraft Style`, 3, 1, 2);
};
function questionFour() {
    question(`Which of these enchantments is NOT for tools?`, `Fortune`, `Looting`, `Efficiency`, `Unbreaking`, 2, 4, 3);
};
function questionFive() {
    question(`Which of these items does a zombie NOT drop?`, `Rotten Flesh`, `Baked Potato`, `Iron Shovel`, `Golden Carrot`, 4, 1, 3);
};
function questionSix() {
    question(`What country is Mojang located in?`, `Germany`, `United States`, `Europe`, `Sweden`, 4, 1, 2);
};
function questionSeven() {
    question(`What is Notch's real name?`, `John Minecraft`, `Markus Persson`, `Todd Howard`, `Peder Bergensten`, 2, 1, 3);
};
function questionEight() {
    question(`Which of these mobs can drop coal when slain?`, `Wandering Traders`, `Husks`, `Wither Skeletons`, `Blazes`, 3, 1, 4);
};
function questionNine() {
    question(`What is the minimal amount of obsidian blocks needed to create a nether portal?`, `8`, `12`, `10`, `9`, 3, 4, 2);
};
function questionTen() {
    question(`What item does a creeper drop when killed by a skeleton?`, `Creeper Head`, `TNT`, `Music Disc`, `Iron Ingot`, 3, 2, 4);
};
function questionEleven() {
    question(`In which biome does emerald ore spawn?`, `Plains`, `Mountains`, `Badlands`, `Savannah`, 2, 1, 4);
};
function questionTwelve() {
    question(`What Minecraft achievement do you get by acquiring diamonds?`, `Cover Me In Diamonds!`, `Diamonds to you!`, `DIAMONDS!`, `OH, SHINY!`, 3, 1, 4);
};
function questionThirteen() {
    question(`What year did Minecraft officially release?`, `2010`, `2009`, `2012`, `2011`, 4, 3, 1);
};
function questionFourteen() {
    question(`What is considered the rarest item in Minecraft?`, `Dragon Egg`, `Nether Star`, `Dragon Head`, `Enchanted Golden Apple`, 1, 3, 4);
};
function questionFifteen() {
    question(`How many peaceful mobs are currently in Minecraft?`, `32`, `34`, `28`, `30`, 1, 3, 4);
};