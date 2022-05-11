function solution(s,n) {
    let small=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let big=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let answer="";
    
    for(let val of s){
        let index_small=(small.indexOf(val)+n)%26;
        let index_big=(big.indexOf(val)+n)%26;
        if(val==" ")answer=answer.concat(" ");
        if(val.match(/[a-z]/g)){
          answer=answer.concat(small[index_small]);
            
      }
        if(val.match(/[A-Z]/g)){
          answer=answer.concat(big[index_big]);
      }
    }
    return answer;
}