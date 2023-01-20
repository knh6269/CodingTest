function solution(s) {
  let alpha = ["zero","one","two","three","four","five","six","seven","eight","nine"];
       
  for (let i = 0; i < 10; i++) {
    s = s.split(alpha[i]).join(i);
  }
  return parseInt(s);
}
