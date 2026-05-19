let getCommon = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    while ( i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            return nums1[i];
        }
    }

    return -1;
};

console.log(getCommon([1,2,3,6], [2,3,4,5]));
