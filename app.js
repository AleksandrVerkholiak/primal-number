function primeNumbers(num) {
    for (let i = 2; i < num; i++) {
        if (isPrimeNumber(i) === false) {
            continue;

        } else {
            console.log(i);
        }
    }
}

function isPrimeNumber(num) {
    for (let i = 2; i < num;) {

        if (num % i === 0) {
            return false;
        } else if (num % i !== 0) {
            i++;
        } else {
            return true;
        }
    }
}

primeNumbers(110);