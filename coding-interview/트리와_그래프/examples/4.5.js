/*
주어진 트리가 이진 탐색 트리인지 확인하는 함수

방법 1 : 전위순회를 하면서 배열에 원소들을 복사해 넣은 뒤 이 결과가 정렬된 상태인지 보는 것
방법 2 : 이진탐색 트리의 정의를 이용 (left.data <= current.data < right.data).
        왼쪽 노드의 모든 노드가 현재 노드보다 작거나 같고, 오른쪽 모든 노드는 현재 노드보다 크다
*/

// n : 현재 검사하고 있는 노드
// min : 현재 노드의 최소값
// max : 현재 노드의 최대값
function checkBST(n, min = null, max = null) {
  if (n === null) {
    return true;
  }
  if ((min !== null && n.data <= min) || (max !== null && n.data >= max)) {
    return false;
  }
  if (!checkBST(n.left, min, n.data) || !checkBST(n.right, n.data, max)) {
    return false;
  }

  return true;
}
