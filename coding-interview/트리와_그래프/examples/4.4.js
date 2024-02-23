/*
이진트리에서 모든 노드에 대해 왼쪽 부분 트리의 높이와 오른쪽 부분 트리의 높이의 차가 최대 하나인지 확인
- 재귀로 전체 트리를 순회하는 것은 비효율적
- 균형이 잡혀 있지 않으면 바로 에러를 반환하도록 만들 수 있음
*/

function checkHeight(root) {
  if (root == null) return -1;

  let leftHeight = checkHeight(root.left);
  if (leftHeight === null) return null;

  let rightHeight = checkHeight(root.right);
  if (rightHeight === null) return null;

  let heightDiff = leftHeight - rightHeight;
  if (Math.abs(heightDiff) > 1) {
    return null;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(root) {
  return checkHeight(root) !== null;
}
