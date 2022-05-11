function solution(arr) {
    let flag=0;
    let start=Math.max(...arr);
    let end=arr.reduce((a,b)=>a*b);
    for(let i=start; i<=end; i++){
        for(let val of arr){
            if(i%val==0)
                flag=1;
            else {
                flag=0;
                break;
            }
        }
        if(flag==1)
            return i;
    }
 }