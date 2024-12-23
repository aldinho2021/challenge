function findPairWithSum(M, N) {
    const seen = new Set();
    
    for (let num of M) {
        const complement = N - num;
        
        if (seen.has(complement)) {
            return [complement, num];
        }
        
        seen.add(num);
    }
    
    return [];
}

const M = [2, 5, 8, 14, 0];
const N = 10;
console.log(findPairWithSum(M, N));
