var reverseList = function(head) {
    let reversedList = [];
    for(let i = head.length - 1; i >= 0; i--) {
        reversedList.push(head[i])
    }
    return reversedList;
};

console.log(reverseList([1,2,3,4,5]));

