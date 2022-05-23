function solution(numbers) {
    numbers=numbers.sort().map((item)=>String(item)).sort((a,b)=>(a+b)-(b+a));
    if(Number(numbers.join(""))==0)return "0";
    return numbers.reverse().join("");
}
