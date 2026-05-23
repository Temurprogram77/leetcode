var check = function(nums) {
    const a = nums.length;
    let tushish = 0;
    
    for (let i = 0; i < a; i++) {
        if (nums[i] > nums[(i + 1) % a]) {
            tushish++;
        }
    }
    
    return tushish <= 1;
};

check([3,4,5,1,2]);