function solution(board, moves) {
    let basket=[];
    let count=0;
    for(let num of moves){
        for(let height of board){
            if(height[num-1]){
                basket.push(height[num-1]);
                height[num-1]=0;
                for(let i=0; i<basket.length; i++){
                    if(basket[i]==basket[i+1]){
                        count++;
                        basket.splice(i,2);
                        i--;
                    }
                }
                break;
            }
        }
    }
    return count*2;
}
