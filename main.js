
function showPrimes (limit){
    let primes = []
    for (let i = 2; i <= limit; i++){
        let count = 0;
        for (let j = 2; j < i; j++){
            let x = i % j
            if (x ===0){
                count++
                break
            }
        }
        if(count === 0){
            primes.push(i)
        }
    }
    return primes
}
console.log(showPrimes(20))