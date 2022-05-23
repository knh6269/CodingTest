function solution(array, commands) {
    let answer=[];
    for(let num of commands){
        let sample=[];
        sample=array.slice(num[0]-1,num[1]).sort((a,b)=>a-b);
        answer.push(sample[num[2]-1]);
    }
    return answer;
}