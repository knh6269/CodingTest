function solution(n) {
    n=String(n).split("").sort().reverse().join("");
    return Number(n);
}