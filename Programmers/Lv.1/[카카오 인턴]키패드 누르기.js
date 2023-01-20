function solution(numbers, hand) {
    let now_l=10;
    let now_r=12;
    let result="";
    let diff_left=0;
    let diff_right=0;
    
    for(let i=0; i<numbers.length; i++)if(numbers[i]==0)numbers[i]=11;
    for(let num of numbers){
        if(num==1||num==4||num==7)
            {
                result+='L';
                now_l=num;
            }
        else if(num==3||num==6||num==9)
            {
                result+='R';
                now_r=num;
            }
        else
            {
                diff_left=Math.floor(Math.abs((num-(now_l+1))/3)+1);
                diff_right=Math.floor(Math.abs((num-(now_r-1))/3)+1);
                if(now_l==2||now_l==5||now_l==8||now_l==11){
                    diff_left=Math.floor(Math.abs((num-now_l))/3);
                }    
                if(now_r==2||now_r==5||now_r==8||now_r==11){
                    diff_right=Math.floor(Math.abs((num-now_r))/3);
                }
               
                if(diff_left<diff_right){
                    result+='L';
                    now_l=num;
                }
                else if(diff_left==diff_right){
                    if(hand=="left"){
                       result+='L';
                        now_l=num;
                    }
                    else{
                        result+='R';
                        now_r=num;
                    }
                }
                else{
                    result+='R';
                    now_r=num;
                }
            }
        }
    return result;
    }
    
    
