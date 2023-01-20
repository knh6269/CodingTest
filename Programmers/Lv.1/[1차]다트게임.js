function SUM(score){  
    
   for(let i=0; i<score.length; i++){
       if(score[i]=='*'){
           score[i-2]*=2;
           score[i-1]*=2;
           score.splice(i,1);
       }
       if(score[i]=='#'){
          score[i-1]*=-1;
           score.splice(i,1);
          }
   } 
    return score[0]+score[1]+score[2];
}
function solution(dartResult) {
    let score=[];
    
    for(let i=0; i<dartResult.length; i++){
        if(dartResult[i]=='S'){
            if(dartResult[i-2]==1){
                score.push(10);
                continue;
            }
            score.push(dartResult[i-1]**1);
        }
        if(dartResult[i]=='D'){
             if(dartResult[i-2]==1){
                 score.push(100); 
                 continue;
             }
            score.push(dartResult[i-1]**2);
        }
        if(dartResult[i]=='T'){
             if(dartResult[i-2]==1){
                 score.push(1000);
                 continue;
             }
            score.push(dartResult[i-1]**3);
        }
        if(dartResult[i]=='*')score.push('*');
        if(dartResult[i]=='#')score.push('#');
    }
    return SUM(score);
}
