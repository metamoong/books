/*
이진트리가 주어졌을 때 같은 깊이에 있는 노드를 연결리스트로 연결해주는 알고리즘
*/
/*
노드 사이의 경로 : 방향 그래프가 주어졌을 때 두 노드 사이에 경로가 존재하는 지 확인
*/

function createLevelLinkedList(root) {
  let result = [];

  let current = [root]; // 현재 레벨의 노드들을 저장

  while (current.length > 0) {
    result.push(current); // 현재 레벨을 결과에 추가
    let parents = current; // 현재 레벨의 노드들을 부모로 설정

    current = []; // 다음 레벨의 노드들을 저장하기 위해 current 배열 초기화

    for (let parent of parents) {
      // 자식 노드들을 다음 레벨의 리스트에 추가합니다.
      if (parent.left != null) {
        current.push(parent.left);
      }
      if (parent.right != null) {
        current.push(parent.right);
      }
    }
  }

  return result;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(createLevelLinkedList(root));
