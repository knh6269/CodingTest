function solution(k, score) {
    const result = [];
    const winner = [];
    
    for (let i = 0; i < k; i++) {
        winner.push(score[i]);
        result.push(Math.min(...winner));
    }
    
    for (let i = k; i < score.length; i++) {
        const min = Math.min(...winner);
        
        if (min < score[i]) {
            winner[winner.indexOf(min)] = score[i];
        }
        
        result.push(Math.min(...winner));
    }
    
    for (let i = 0; i < k - score.length; i++) {
        result.pop();
    }
    
    return result;
}