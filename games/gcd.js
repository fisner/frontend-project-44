import readlineSync from 'readline-sync';
export const gcd = () => {
	console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
	console.log('Hello, ', name);
    console.log('Find the greatest common divisor of given numbers');
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    const number2 = Math.floor(Math.random() * (100 - 1) + 1);
    const sum = number + number2;
    console.log('Question:', number, " ", number2);
    const answer = readlineSync.question('Your answer:');
    if (answer === sum) {
        console.log('Correct!');
    } else {
        console.log(answer,'is wrong answer ;(. Correct answer was', sum, "\n Let's try again,", name);
    }
return name;
}