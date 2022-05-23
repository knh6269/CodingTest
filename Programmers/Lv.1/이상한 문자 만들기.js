function solution(s) {
    let sample=s.split(" ");
    let answer=[];
    
    for(let word of sample){
        word=word.split("");
        for(let i=0; i<word.length; i++){
            if(i%2==0){
                word[i]=word[i].toUpperCase();
            }
            else{
                word[i]=word[i].toLowerCase();     
        }
    }
    word=word.join(""); 
    answer.push(...word);
    answer.push(" ");
    }
    return answer.join("").slice(0,answer.length-1);
}