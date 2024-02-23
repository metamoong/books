/* 
오름차순으로 정렬된 배열을 가지고 높이가 최소가 되는 이진 탐색 트리 만들기 
- 최소 높이 트리를 생성하려면 왼쪽 하위 트리의 노드 개수와 오른쪽 하위 트리의 노드 개수를 가능한 같게 맞춰야 함

과정
1. 배열 가운데 원소를 트리에 삽입
2. 왼쪽 하위 트리에 왼쪽 절반 배열 원소들 삽입
3. 오른쪽 하위 트리에 오른쪽 절반 배열 원소들 삽입
4. 재귀 호출 실행
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createMinimalBST(arr, start, end) {
  if (end < start) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(arr[mid]);
  node.left = createMinimalBST(arr, start, mid - 1);
  node.right = createMinimalBST(arr, mid + 1, end);
  return node;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(createMinimalBST(array, 0, array.length - 1));
