def getCommon(nums1, nums2):
    i = 0;
    j = 0;
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            i+=1
        elif nums2[j] < nums1[i]:
            j+=1
        else:
            return nums1[i]
    return -1

print(getCommon([1,2,3,6], [2,3,4,5]))