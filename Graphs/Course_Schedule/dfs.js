function courseSchedule(numCourses, prerequisites) {
  let dependencyMap = new Map();
  let order = [];
  let visited = new Array(numCourses).fill(0);

  for (let [u, v] of prerequisites) {
    if (!dependencyMap.has(v)) dependencyMap.set(v, []);
    dependencyMap.get(v).push(u);
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0 && dfs(i)) return [];
  }

  function dfs(index) {
    visited[index] = 1;
    let dependencies = dependencyMap.get(index);

    for (let dependency of dependencies) {
      if (visited[dependency] === 1) return true;
      if (visited[dependency] === 0 && dfs(dependency)) return true;
    }

    visited[index] = 2;
    order.push(index);
  }

  return order.reverse();
}
