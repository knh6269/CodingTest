function solution(x) {
    let sample=String(x);
    sample=sample.split("");
    for(let i=0; i<sample.length; i++){
        sample[i]=parseInt(sample);
    }
    let sum=sample.reduce((sum,cur)=>sum+cur);
    if(x%sum==0)return true;
    else return false;
}