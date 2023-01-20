function solution(id_list, report, k) {
    report=new Set([...report]);
    report=Array.from(report)
    let map=report.map((item)=>item.split(" "));
    let answer=[];
    let dic={};
    let reported={};
    
    for(let id of id_list){
      dic[id]=0;
      reported[id]=0;
    }
    for(let maps of map){
        reported[maps[1]]+=1;
    }
    for(let key in reported){
       if(reported[key]>=k){
           for(let val of map){
               if(val[1]==key){
                   dic[val[0]]+=1;
               }
           }
       }
    }
    for(let key in dic){
      answer.push(dic[key]);
    }
    return answer;
}
