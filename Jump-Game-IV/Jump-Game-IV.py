from collections import defaultdict, deque

def minJumps(arr):
    n = len(arr)
    if n == 1:
        return 0

    graph = defaultdict(list)
    for i in range(n):
        graph[arr[i]].append(i)

    visited = {0}
    queue = deque([0])
    steps = 0

    while queue:
        steps += 1
        for _ in range(len(queue)):
            i = queue.popleft()

            neighbors = graph.pop(arr[i], [])
            for j in neighbors:
                if j not in visited:
                    if j == n - 1:
                        return steps
                    visited.add(j)
                    queue.append(j)

            if i + 1 < n and i + 1 not in visited:
                if i + 1 == n - 1:
                    return steps
                visited.add(i + 1)
                queue.append(i + 1)

            if i - 1 >= 0 and i - 1 not in visited:
                if i - 1 == n - 1:
                    return steps
                visited.add(i - 1)
                queue.append(i - 1)

    return -1

print(minJumps([100,-23,-23,404,100,23,23,23,3,404]))