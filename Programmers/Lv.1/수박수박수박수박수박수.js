function solution(n) {
    let answer="";
    for(let i=1; i<=n; i++){
        if(i%2==1)answer=answer.concat("수");
        else answer=answer.concat("박");
    }    
    return answer;
}