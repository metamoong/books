/*❓단방향 연결리스트에서 뒤에서 k번째 원소 구하기 */

/*
책 java 코드
int printKthToLast(LinkedListNode head, int k){
	if(head == null){
		return 0;
	}
	int index = printKthToLast(head.next,k)+1;
	if(index==k){
		System.out.prinln(k+"th to last node is" + head.data);
	}
	return index;
}
*/
