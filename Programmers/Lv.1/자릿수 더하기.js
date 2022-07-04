function solution(n)
{   
    n=String(n);
    let sum=0;
    for(let num of n){
        sum+=Number(num);
    }
    return sum;
}