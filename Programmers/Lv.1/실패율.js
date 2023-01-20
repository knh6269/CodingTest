function solution(N, stages) {
    let stage=new Array(N+1);
    let answer=[];
    for(let i=1; i<stage.length; i++)stage[i]=new Array(2).fill(0);

    for(let i=1; i<=N; i++){
        let sample=stages.filter((a)=>a==i).length/stages.filter((a)=>a>=i).length;
        stage[i][0]=i;
        stage[i][1]=sample;
    }
    stage.sort((function comperator(a,b){
        if(a[1]<b[1])return 1;
        else if(a[1]>b[1])return -1;
        else {
            if(a[0]<b[0])return -1;
        }
    }))
   for(let val of stage){
      if(val!=undefined)answer.push(val[0]);
   }
   return answer;
}
