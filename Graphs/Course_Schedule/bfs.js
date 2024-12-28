function courseSchedule(numCourses, prerequisites) {
  let order = [];
  let queue = [];
  let dependencyMap = new Map();
  let inDegree = new Array(numCourses).fill(0);

  for (let [u, v] of prerequisites) {
    inDegree[u]++;
    if (!dependencyMap.has(v)) dependencyMap.set(v, []);
    dependencyMap.get(v).push(u);
  }

  for (let i = 0; i < inDegree; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    let currNode = queue.shift();
    let dependencies = dependencyMap.get(currNode);

    if (dependencies) {
      for (let dependency of dependencies) {
        inDegree[dependency]--;
        if (inDegree[dependency] === 0) queue.push(dependency);
      }
    }
    order.push(currNode);
  }

  return order.length === numCourses ? order : [];
}
