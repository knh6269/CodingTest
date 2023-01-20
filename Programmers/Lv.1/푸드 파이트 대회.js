function solution(food) {
    let result = [];
    
    for (let i = 1; i < food.length; i++) {
        
        if (food[i] % 2) {
            food[i] -= 1;
        }

        for (let j = 0; j < food[i] / 2; j++) {
            result.push(i);
        }
    }

    result.push(0,...[...result].reverse());

    return result.join("");
}