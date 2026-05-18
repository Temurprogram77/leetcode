var minJumps = function(arr) {
    const n = arr.length;
    if (n === 1) {
        return 0
    };

    const graph = new Map();

    for (let i = 0; i < n; i++) {
        if (!graph.has(arr[i])) graph.set(arr[i], []);
        graph.get(arr[i]).push(i);
    }

    const visited = new Set([0]);
    let queue = [0];
    let steps = 0;

    while (queue.length > 0) {
        const next = [];
        steps++;

        for (let i of queue) {

            const neighbors = graph.get(arr[i]) || [];

            for (let j of neighbors) {
                if (!visited.has(j)) {
                    if (j === n - 1) return steps;
                    visited.add(j);
                    next.push(j);
                }
            }

            graph.delete(arr[i]);

            if (i + 1 < n && !visited.has(i + 1)) {
                if (i + 1 === n - 1) return steps;
                visited.add(i + 1);
                next.push(i + 1);
            }
            if (i - 1 >= 0 && !visited.has(i - 1)) {
                if (i - 1 === n - 1) return steps;
                visited.add(i - 1);
                next.push(i - 1);
            }
        }
        queue = next;
    }
    return -1;
};

console.log(minJumps([100,-23,-23,404,100,23,23,23,3,404]));
