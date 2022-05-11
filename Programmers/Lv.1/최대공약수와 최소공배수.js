function solution(n, m) {
    let answer=[];
    let max=0;
    for(let i=1; i<=n; i++){
        if(n%i==0&&m%i==0){
            max=Math.max(max,i);
        }    
    }
    answer.push(max);
    for(let i=1; i<=n*m; i++){
        if(i%n==0&&i%m==0){
            answer.push(i);
            break;
        }
    }
    return answer;
}