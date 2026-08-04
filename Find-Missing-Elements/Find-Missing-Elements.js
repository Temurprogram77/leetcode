var findMissingElements = function(nums) {
    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);

    const numSet = new Set(nums)
    const result = [];

    for (let i = minNum + 1; i < maxNum; i++) {
        if(!numSet.has(i)) result.push(i);
    }

    return result;
};