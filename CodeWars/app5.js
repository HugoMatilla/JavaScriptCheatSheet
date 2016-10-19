function Node(data) {
  this.data = data;
  this.next = null;
}
function NodeToArray(head){
  if (head == null)
    return [0]
  var next = head.next
  var arr =[head.data]
  while (next!=null){
    arr.push(next.data)
    next = next.next
  }
  return arr
}

function length(head) {
  return NodeToArray(head).reduce(function(previousValue, currentValue, currentIndex, array) {
    return currentIndex;
  });
  
}

Implement Length() to count the number of nodes in a linked list.

length(null) === 0
length(1 -> 2 -> 3 -> null) === 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) === 0
count(1 -> 2 -> 3 -> null, 1) === 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4
I've decided to bundle these two functions within the same Kata since they are both very similar.

The push() and buildOneTwoThree() functions do not need to be redefined.