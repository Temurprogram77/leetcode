let divide = (dividend, divisor) => {
    const MAX = 2147483647;
    const MIN = -2147483648;
    if (dividend === MIN && divisor === -1) return MAX;
    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;
    while (a >= b) {
        let temp = b;
        let multiple = 1;
        while (temp <= (MAX >> 1) && a >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        result += multiple;
    }
    return sign === 1 ? result : -result;
};

console.log(divide(10, 3));
