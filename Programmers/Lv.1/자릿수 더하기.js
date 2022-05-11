function solution(n)
{   
    n=String(n).split("");
    if(n.length==1)return Number(n);
    return n.reduce((sum,cur)=>Number(sum)+Number(cur));
}