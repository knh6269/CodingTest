function solution(n) {
    let isPrime=[];
    let prime=[];
    
    for(let i=0; i<=n; i++){
        if(i==0||i==1)isPrime[i]=false;
        else isPrime[i]=true;
    }
    
    for(let i=2; i<=n; i++){
        if(isPrime[i]){
            prime.push(i);
            for(let j=i; j<=n; j+=i){
                isPrime[j]=false;
            }
        }
    }
    return prime.length;
}