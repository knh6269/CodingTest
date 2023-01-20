function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<n; i++){
        let sample=(arr1[i] | arr2[i]).toString(2);
        let result=[];
             for(let i= sample.length-n; i<sample.length; i++ ){
                 if(sample[i]==='1'){
                    result.push('#');
                  }
                 else {
                    result.push(' ');
                }
            }
    answer.push(result.join(""));
   }
    return answer;
}
