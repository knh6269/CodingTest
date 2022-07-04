function solution(s) {
    if(s.length==4||s.length==6);
    else return false;
    for(let val of s){
        if(val.match(/[0-9]/g))continue;
        else return false;
    }
    return true;
}
