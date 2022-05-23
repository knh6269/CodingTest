function solution(absolutes, signs) {
    for(let i=0; i<signs.length; i++)
        if(signs[i]==false) absolutes[i]*=-1;
    return absolutes.reduce((sum,cur)=>cur+sum);
}