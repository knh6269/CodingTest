function solution(n) {
    let sample = new Array(n+1).fill(0)
   sample[0]=0;
   sample[1]=1;
   for(let i=2; i<=n; i++){
       sample[i]=(sample[i-2]+sample[i-1])%1234567;
   }
   return sample[n];
}