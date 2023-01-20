function solution(new_id) {
    //1단계
    new_id=new_id.toLowerCase();
    
    //2단계
    new_id=new_id.match(/[a-z0-9._-]/g);
    
    //3단계
    for(let i=0; i<new_id.length; i++){
        if(new_id[i]=='.'&&new_id[i]==new_id[i+1]){
            let count=1;
            while(new_id[i]==new_id[i+count]){
                count++;
            }
            new_id.splice(i,count,'.');
        }
    }
    
    //4단계
    if(new_id[0]=='.')new_id.shift();
    
    if(new_id[new_id.length-1]=='.')new_id.pop();
    
    //5단계
    if(new_id.length==0)new_id.push('a');
    
    //6단계
    new_id=new_id.join("");
    if(new_id.length>=16)new_id=new_id.substring(0,15)
    if(new_id[new_id.length-1]=='.')new_id=new_id.substring(0,14);
    
    //7단계
    if(new_id.length<=2){
        while(new_id.length<3){
            new_id+=new_id[new_id.length-1];
        }
    }
    return new_id;
}
