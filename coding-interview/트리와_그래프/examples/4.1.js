/*
노드 사이의 경로 : 방향 그래프가 주어졌을 때 두 노드 사이에 경로가 존재하는 지 확인
*/

function search(graph, start, dest) {
  const isVisited = new Array(graph.length).fill(false);

  isVisited[start] = true;
  const q = [start];

  while (q.length > 0) {
    const v = q.shift();
    if (v === dest) return true;

    graph[v].forEach((next) => {
      if (!isVisited[next]) {
        isVisited[next] = true;
        q.push(next);
      }
    });
  }

  return false;
}

console.log(search([[1, 4], [2], [], [5], [], [1]], 0, 2));
