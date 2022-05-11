function solution(s){
    s=s.toLowerCase();
    let count_p=0;
    let count_y=0;
    for(let val of s){
        if(val=='p')count_p++;
        if(val=='y')count_y++;
    }
    if(count_p==count_y)return true;
    return false;
    
}