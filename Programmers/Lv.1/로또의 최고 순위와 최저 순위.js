function solution(lottos, win_nums) {
    let count=0;
    let count_o=0;
    let answer=[];
    for(let i=0; i<lottos.length; i++){
        if(win_nums.includes(lottos[i])){
            count++;
        }
        if(lottos[i]==0)count_o++;
    }
    if((count+count_o)==2)answer.push(5);
    else if(count+count_o==3)answer.push(4);
    else if(count+count_o==4)answer.push(3);
    else if((count+count_o)==5)answer.push(2);
    else if(count+count_o==6)answer.push(1);
    else answer.push(6);
    
    if(count==2)answer.push(5);
    else if(count==3)answer.push(4);
    else if(count==4)answer.push(3);
    else if(count==5)answer.push(2);
    else if(count==6)answer.push(1);
    else  answer.push(6);
    
    return answer;
}
