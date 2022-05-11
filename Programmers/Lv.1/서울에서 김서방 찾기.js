function solution(seoul) {
    for(let val of seoul){
        if(val.match(/[Kim]/g)){
            return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
        }
    }
}