function solution(s) {
    let i=0; //자르기 시작하는 인덱스
    let k=1; //자르는 끝 인덱스 
    let answer=[];
    if(s.length==1)return 1;
    
    while(k<s.length)
    {
    let slice=[];
       while(s.substring(i,i+k)){
            slice.push(s.substring(i,i+k));
            i+=k;  
        }
    for(let j=0; j<slice.length; j++){
        if(slice[j]==slice[j+1]){
            let count=2
            while(slice[j]==slice[j+count]){
                count++;
            }
            slice.splice(slice.indexOf(slice[j]),count-1,count);
        }
    }
    slice=slice.join("");
    answer.push(slice.length);    
    i=0;
    k++;
    }
    return Math.min(...answer);
}