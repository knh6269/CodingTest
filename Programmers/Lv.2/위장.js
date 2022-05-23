function solution(clothes) {
    clothes=clothes.sort(function comperator(a,b){
        if(a[1]>b[1])return 1;
        else if (a[1]<b[1])return -1;
        else return 0;
    })
    let sample=clothes.slice(0,clothes.length);
    for(let i=0; i<sample.length; i++){
        sample[i]=[];
    }  
      let compare=clothes[0][1];
      let j=0;
      for(let num of clothes){
          if(compare==num[1])
              sample[j].push(num[0]);
          
          else {
              compare=num[1];
              j++;
              sample[j].push(num[0]);
          }
      }
      let sum=1;
      
      for(let j=sample.length-1; j>0; j--) 
          if(sample[j].length==0)sample.pop();
      
       if(sample.length==1) 
           return sample[0].length;
      
      for(let k=0; k<sample.length; k++) 
          sum*=sample[k].length+1;
      
      return sum-1;
  }