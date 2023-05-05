// Optionally: start with your code from LinkedList challenge.

// program to implement stackk data structure
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stackk
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stackk
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stackk is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stackk
    size(){
        return this.items.length;
    }
 
    // empty the stackk
    clear(){
        this.items = [];
    }
}

let stackk = new Stack();
stackk.add(1);
stackk.add(2);
stackk.add(4);
stackk.add(8);
console.log(stackk.items);

stackk.remove();
console.log(stackk.items);

console.log(stackk.peek());

console.log(stackk.isEmpty());

console.log(stackk.size());

stackk.clear();
console.log(stackk.items);
const stackk = new Stack()
stackk.push(3)
stackk.push(5)
console.log(stackk.pop())
// => 5

stackk.push(2)
stackk.push(7)
console.log(stackk.pop())
// => 7

console.log(stackk.pop())
// => 2

console.log(stackk.pop())
// => 3

module.exports = Stack
