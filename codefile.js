import readlineSync from 'readline-sync';

const name = readlineSync.question('May i have your name?');
console.log('Hello,', name, '!', /n,'Answer "yes" if the number is even, otherwise answer "no".');
const num = Math.floor(Math.random);
console.log('question:',num);                    
const nameAnswer = readlineSync.question('Your answer:');
if (nameAnswer === 'yes' $ num % 2 === 0) {
	console.log('Correct!');
}



