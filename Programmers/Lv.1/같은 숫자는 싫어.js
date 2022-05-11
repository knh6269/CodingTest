function solution(arr)
{
   let sample=[];
   for(let i=0; i<arr.length; i++){
    if(sample.includes(arr[i]))continue;
     sample.push(arr[i]);
   }
    return sample;
}