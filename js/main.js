let question1 = +prompt('Сколько будет 2+2?');
let question2 = confirm('Солнце встает на востоке?');
let question3 = prompt('Сколько будет 5 / 0?');
let question4 = prompt('Какого цвета небо?');
let question5 = +prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?');
let score = 0;

if (question1 == 4) {
    score += 10;
} else {
    score += 0;
}
console.log(`question1 ${question1}`);
console.log(score);
if (question2 == true) {
    score += 10;
} else {
    score += 0;
}
console.log(`question2 ${question2}`);
console.log(score);
if (question3 == null) {
    score += 0;
} else if (question3 == '') {
    score += 0;
} else if (question3 === 'undefined', 'infinity', 'бесконечность') {
    score += 10;
} else {
    score += 0;
}

console.log(`question3 ${question3}`);
console.log(score);

if (question4 == null) {
    score += 0;
} else if (question4 == '') {
    score += 0;
} else if (question3 === 'undefined', 'infinity', 'бесконечность') {
    score += 10;
} else {
    score += 0;
}

console.log(`question4 ${question4}`);
console.log(score);
if (question5 == 42) {
    score += 10;
} else {
    score += 0;
}

console.log(`question ${question5}`);
console.log(score);

if (score == 50) {
    alert(`Вы набрали ${score} баллов, максимальный результат, поздравляю!`);
} else if (score == 40) {
    alert(`Вы набрали ${score} баллов. Хороший результат!`);
} else if (score == 30) {
    alert(`Вы набрали ${score} баллов. Уверен, Вы можете лучше!`);
} else if (score == 20) {
    alert(`Вы набрали ${score} баллов. Неплохо`);
} else if (score == 10) {
    alert(`Вы набрали ${score} баллов. Сегодня не Ваш день!`);
} else {
    alert(`Вы набрали ${score} баллов. Что-то пошло не так!`);
}
