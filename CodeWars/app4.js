function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
    var node = new Node(data)
    node.next = head;
    return node;
}

function pop(head) {
    node.next = null;
    return head.data;
}


function buildOneTwoThree() {
	var node =  new Node(3)
	node = push(node,2);
	node = push(node,1);
	return node;
}
///
function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce( (head, data) => push(head, data), null );
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}