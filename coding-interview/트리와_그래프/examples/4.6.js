/*
이진 탐색 트리에서 주어진 노드의 '다음' 노드(중위 후속자) 를 찾는 알고리즘
중위 후속자? - 중위 순회의 순서에서 그 다음에 이어질 차례의 노드

- 다음에 방문해야 할 노드는 오른쪽 하위 트리의 맨 왼쪽 노드이다.
- 만약 오른쪽 하위 트리가 없다면 현재 노드가 부모 노드의 왼쪽 자식인지, 오른쪽 자식인지를 확인해야 한다.
- 왼쪽 자식이라면 다음 방문할 노드는 부모 노드가 됨
- 오른쪽 자식이라면 다음 방문할 노드는 부모노드의 부모노드 중에 다음 방문할 노드를 찾아야 함
  (노드가 왼쪽에 있을 때까지!)

*/

function inorderSucc(n) {
  if (n === null) return null;

  // 오른쪽 자식이 존재하는 경우, 오른쪽 부분 트리에서 가장 왼쪽 노드를 반환
  if (n.right !== null) {
    return leftMostChild(n.right);
  } else {
    let q = n;
    let x = q.parent;
    // 오른쪽이 아닌 왼쪽에 있을 때까지 위로 올라간다.
    while (x !== null && x.left !== q) {
      q = x;
      x = x.parent;
    }
    return x;
  }
}

function leftMostChild(n) {
  if (n === null) {
    return null;
  }
  while (n.left !== null) {
    n = n.left;
  }
  return n;
}
