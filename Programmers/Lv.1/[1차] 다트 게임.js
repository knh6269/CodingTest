function solution(dartResult) {
    var answer = 0;
    let sample;
    let cnt=0;
    let stauts=0;
    let score =new Array();
    for(let i=0; i<3; i++){
        score[i]=0;
    }
    
    for(let i=0; i<dartResult.length; i++){
        
    if(dartResult[i]=="S"){
        if((dartResult[i-1]=="0")&&(dartResult[i-2]=="1")){
            sample=10;
            stauts=1;
        }
        else{
            sample=parseInt(dartResult[i-1]);   
            stauts=1;
            }
            }
    else if(dartResult[i]=="D"){
        if((dartResult[i-1]=="0")&&(dartResult[i-2]=="1")){
        sample=100;
        stauts=1;
        }
        else{
        sample=parseInt(dartResult[i-1]**2);
        stauts=1;
        }
    }
    else if(dartResult[i]=="T"){
        if((dartResult[i-1]=="0")&&(dartResult[i-2]=="1")){
        sample=1000;
        stauts=1;
        }
        else{
    sample=parseInt(dartResult[i-1]**3);
    stauts=1;
    }
    }
    
    if(dartResult[i+1]=="*"){
        if(cnt==0){
            sample=sample*2;
            score[cnt]=sample;
            cnt++;
            stauts=0;
        }
        else{
            sample=sample*2;
            score[cnt-1]=score[cnt-1]*2;
            score[cnt]=sample;
            cnt++;
            stauts=0;
        }
    }
    
    else if(dartResult[i+1]=="#"){
       sample=sample*(-1);
       score[cnt]=sample;
       cnt++;
        stauts=0;
    }
    else{
     if(stauts==1){
     score[cnt]=sample;
     cnt++;
     stauts=0;
     }
     else{
         continue;
     }
    }
    }
    
    for(let i=0; i<3; i++){
        answer+=score[i];
    }
    
    
    return answer;
}