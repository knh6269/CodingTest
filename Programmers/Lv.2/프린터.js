function solution(priorities, location) {
    let sample;
    let count=1;
    let answer;
    let i=0;
    for(let i=0; i<priorities.length; i++){
        priorities[i]=[priorities[i],i];
    }        
    while(priorities.length>0){
        sample=priorities.shift();
        if(sample.length==0)return count;
        
        if(priorities.filter((item)=>item[0]>sample[0]).length!=0){
            priorities.push(sample);
        }
        else {
            if(sample[1]==location)return count;
            count++;
        }
    }
}