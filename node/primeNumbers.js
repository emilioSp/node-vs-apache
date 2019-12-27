function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function computePrimeSequence(n) {
    const result = [2];
    for (let i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

module.exports = computePrimeSequence;