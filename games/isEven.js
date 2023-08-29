import readlineSync from 'readline-sync';
export const isEven = () => {
	console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
	console.log('Hello, ', name);
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer:');
    if ((answer === 'yes' & number % 2 === 0) || (answer === 'no' & number % 2 !== 0)) {
        console.log('Correct!');
    } else {
        console.log(answer,'is wrong answer ;(. Correct answer was \n Let\'s try again,', name);
    }
return name;
}