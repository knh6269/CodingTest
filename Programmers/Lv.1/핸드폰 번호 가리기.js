function solution(phone_number) {
    phone_number=phone_number.split("");
    let count=0;
    for(let i=0; i<phone_number.length; i++){
        if(count==phone_number.length-4){
        break;
        } 
        phone_number[i]='*';
        count++;  
    }
    return phone_number.join("");
  }
  
  //리팩토링
  function solution(phone_number) {
    let answer="";
     return  answer="*".repeat(phone_number.length-4)+phone_number.slice(-4);
  }