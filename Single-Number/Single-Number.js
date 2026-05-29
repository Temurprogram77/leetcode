var singleNumber = function(nums) {
    let result = 0;
    for(let i of nums){
        result = result ^ i;
    }
    return result;
};
console.log(singleNumber([4,1,2,1,2]));
