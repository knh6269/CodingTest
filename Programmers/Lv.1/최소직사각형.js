function solution(sizes) {
    let w=[],h=[];
    sizes.map(([width,height])=>{ 
      if(width<height){
          w.push(height);
          h.push(width);
      }
      else {
          w.push(width);
          h.push(height);
      }
      }
     );
      return Math.max(...w)*Math.max(...h);
  }