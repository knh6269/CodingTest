function solution(arr) {
    let min=Math.max(...arr);
    if(arr.length==1){
        return [-1];
    }
    for(let val of arr){
        min=Math.min(val,min);
    }
    arr.splice(arr.indexOf(min),1);
    return arr;
}