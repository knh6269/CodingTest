function solution(answers) {
    let answer = [];
    let score=[];
    let one=[];
    let two=[];
    let three=[];
    let count=0;
    let count_2=1;
    let one_score=0;
    let two_score=0;
    let three_score=0;
    
    for(let i=0; i<answers.length; i++){
      one[i]=(i)%5+1;
    }
    
    for(let i=0; i<answers.length; i++){
        if(i%2==0){
            two[i]=2;
        }
        else{
            if(count==0){
                two[i]=1;
            }
            if(count==1){
                two[i]=3;
            }
            if(count==2){
                two[i]=4;
            }
            if(count==3){
                two[i]=5;
                count=-1;
            }
            count++;
        }
    }
    for(let i=0; i<answers.length; i++){
        if(three.length==0){
            three[i]=3;
            count_2=0;
        }
        if(three[i-1]==3&&count_2==1){
            count_2=0;
            three[i]=1;
        }
        else if(three[i-1]==3&&count_2==0){
            count_2++;
            three[i]=3;
        }
        else if(three[i-1]==1&&count_2==1){
            count_2=0;
            three[i]=2;
        }
        else if(three[i-1]==1&&count_2==0){
            count_2++;
            three[i]=1;
        }
        else if(three[i-1]==2&&count_2==1){
            count_2=0;
            three[i]=4;
        }
        else if(three[i-1]==2&&count_2==0){
            count_2++;
            three[i]=2;
        }
         else if(three[i-1]==4&&count_2==1){
            count_2=0;
            three[i]=5;
        }
        else if(three[i-1]==4&&count_2==0){
            count_2++;
            three[i]=4;
        }
       else if(three[i-1]==5&&count_2==1){
            count_2=0;
            three[i]=3;
        }
        else if(three[i-1]==5&&count_2==0){
            count_2++;
            three[i]=5;
        }
    }  
   
    for(let i=0; i<answers.length; i++){
        if(answers[i]==one[i])one_score++;
        if(answers[i]==two[i])two_score++;
        if(answers[i]==three[i])three_score++;
    }
   
    
    let max=Math.max(one_score,two_score,three_score);
    if(one_score==max)answer.push(1);
    if(two_score==max)answer.push(2);
    if(three_score==max)answer.push(3);
    return answer;
}