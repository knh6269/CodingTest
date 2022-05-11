function solution(a,b){
    let answer = "";
    let MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
    let WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let sum = 0;
      for(let index =1; index<a; index++){
      sum+=MONTH[index-1];
    }
      answer = WEEK[(sum+b-1)%7];
      return answer;
  }