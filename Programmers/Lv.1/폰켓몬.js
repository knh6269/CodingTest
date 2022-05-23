function solution(nums) {
    const sample = [...new Set(nums)];
    return nums.length/2<sample.length? nums.length/2:sample.length;
 }