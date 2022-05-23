function solution(answers) {
    let answer=[];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    
    let one_score=0;
    let two_score=0;
    let three_score=0;
    
    for(let i=0;i<answers.length; i++){
     if(one[i%one.length]==answers[i])one_score++;
     if(two[i%two.length]==answers[i])two_score++;
     if(three[i%three.length]==answers[i])three_score++;
    }
    let max=Math.max(one_score,two_score,three_score);
    let sample=[one_score,two_score,three_score];
    
    for(let i=0; i<3; i++){
        if(sample[i]==max)answer.push(i+1);
    }
    return answer;
    }