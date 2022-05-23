function solution(n, lost, reserve) {
    let sample=[];
    
    for(let i=0; i<n; i++)sample.push(1);
    for(let num of lost)sample[num-1]=sample[num-1]-1;
    for(let val of reserve)sample[val-1]=sample[val-1]+1;
    
    for(let i=0; i<n; i++){
        if((sample[i]==2&&sample[i+1]==0)||(sample[i]==0&&sample[i+1]==2)){
            sample[i]=1; 
            sample[i+1]=1;
        }
    }
    return sample.filter((item)=>item>=1).length;
}