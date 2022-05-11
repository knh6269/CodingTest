function solution(s) {
    s=s.toLowerCase();
    let sample=s.split(" ");
    
    for(let i=0; i<sample.length; i++){
                sample[i]=sample[i].split("");
                let key=sample[i][0];
                if(typeof(key)=='string')key=key.toUpperCase();
                sample[i].splice(0,1,key);
                sample[i]=sample[i].join("");
    }
    return sample.join(" ");
}