function solution(s) {
    let answer = '';
    s=s.split(""); //splice를 사용하기 위해 배열 형태로 변환
    //짝수
    if(s.length%2==0){
       return s.splice((s.length/2)-1,2).join("");
    }
    //홀수
    if(s.length%2==1){
       return s[Math.floor(s.length/2)];
    }

}