// QUESTION SET SCREEN
const body = document.querySelector('body');
const lifeline5050 = document.getElementById('5050-lifeline');
const setSwapBtn = document.getElementById('setSwap-btn');
const questionBox = document.querySelector('.question');
const audio = new Audio("media/background.mp3");
const modalBtn = document.getElementById("modalBtn");
const moneyContainer = document.querySelectorAll('.amount').forEach(el => el.addEventListener('click', selectedQuestion))
const lifelineContainer = document.querySelectorAll('.lifeline').forEach(el => el.addEventListener('click', selectedLifeline))
const correctAnswer = document.querySelectorAll('.answer-container > p').forEach(el => el.addEventListener('click', selectedAnswer));

function selectedQuestion(){
    this.classList.add('selected');
    audio.play();
    document.querySelectorAll('p > span').forEach(el => {
        el.style.animation = 'fadeInAnimation 3s ease-in-out';
    });
    new Audio('media/question.mp3').play();
}

function selectedLifeline(){
    this.classList.add('lifeline-used');
    this.classList.remove('lifeline');
}

function selectedAnswer() {
    this.classList.add('answer-selected');
    this.classList.remove('answer');
    audio.pause();

    if(this.classList.contains('correct')) {
        this.style.backgroundImage = 'radial-gradient(rgb(51, 208, 27), rgb(27, 129, 11))';
        new Audio('media/correct.mp3').play();
        document.querySelectorAll('p > span').forEach(el => {
            el.style.animation = '';
        });
    } else {
        this.style.backgroundImage = 'radial-gradient(rgb(208, 27, 27), rgb(129, 11, 11))';
        new Audio('media/wrong.mp3').play();
        document.querySelectorAll('p > span').forEach(el => {
            el.style.animation = '';
        });
    };

    if(this.classList.contains('answer-selected')){
        document.querySelectorAll('.answer-container > .answer').forEach(el => el.style.zIndex = '-2');
        document.querySelectorAll('.answer-container > .answer').forEach(el => el.style.opacity = '.4');
        document.querySelector('.correct').style.backgroundImage = 'radial-gradient(rgb(51, 208, 27), rgb(27, 129, 11))';
        document.querySelector('.correct').style.animation = 'fadeInAnimation 3s ease-in-out'
    };

    this.style.animation = 'fadeInAnimation 3s ease-in-out';
    questionBox.style.animation = '';
};

lifeline5050.addEventListener('click', () => {
    const answerList = document.querySelectorAll('.answer-container > .half');
    answerList.forEach(element => element.style.opacity = 0);
    answerList.forEach(element => element.style.zIndex = '-3');
});

modalBtn.addEventListener('click', () => {
    audio.play();
    document.getElementById('modal-container').style.display = 'none';
})