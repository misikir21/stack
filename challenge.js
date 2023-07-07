class Stack {
  constructor() {
    this.items = [];
  }
  push(number) {
    // your code here
    this.items.push(number);
  }
  pop() {
    // your code here
    return this.items.pop();
  }
}
const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5
stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7
console.log(stack.pop())
// => 2
console.log(stack.pop())
// => 3
module.exports = Stack
9:27
This is the code for the first coding challenge:
9:27
// Start with your code from LinkedList challenge.
class Queue {
  constructor() {
    this.items = [];
  }
  add(number) {
    // your code here
    this.items.push(number);
  }
  remove() {
    // your code here
    if(this.items.length > 0){
      return this.items.shift();
    }
    return -1;
  }
}
const queue = new Queue()
queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3
queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5
console.log(queue.remove())
// => 2
console.log(queue.remove())
// => 7
console.log(queue.remove())
// => -1
module.exports = Queue