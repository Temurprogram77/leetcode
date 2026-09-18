var maxNumOfSubstrings = function (s) {
    const first = new Array(26).fill(-1);
    const last = new Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;
        if (first[c] === -1) first[c] = i;
        last[c] = i;
    }

    const intervals = [];

    for (let i = 0; i < 26; i++) {
        if (first[i] === -1) continue;

        let left = first[i], right = last[i];
        let isValid = true;

        for (let j = left; j <= right; j++) {
            const c = s.charCodeAt(j) - 97;
            if (first[c] < left) {
                isValid = false;
                break;
            }
            right = Math.max(right, last[c]);
        }

        if (isValid) intervals.push([left, right]);
    }

    intervals.sort((a, b) => a[1] - b[1]);

    const ans = [];
    let prevEnd = -1;

    for (const [left, right] of intervals) {
        if (left > prevEnd) {
            ans.push(s.slice(left, right + 1));
            prevEnd = right;
        }
    }

    return ans;
};

console.log(maxNumOfSubstrings("adefaddaccc"));
