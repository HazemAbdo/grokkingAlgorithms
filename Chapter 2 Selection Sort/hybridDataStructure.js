//an array of linked lists. You have an array with 26 slots. Each slot points to a
//linked list. For example, the first slot in the array points to a linked
//list containing all the usernames starting with a. The second slot
//points to a linked list containing all the usernames starting with b, and so on.
class hybridDS {
  constructor() {
    this.arrOfLists = [];
    for (let i = 0; i < 26; i++) {
      this.arrOfLists[i] = new LinkedList();
    }
  }
  insert(userName) {
    let firstLetter = userName ? userName[0].toLowerCase() : null;
    this.arrOfLists[firstLetter.charCodeAt(0) - 97].insertLast(userName);
  }
  delete(userName) {
    let firstLetter = userName ? userName[0].toLowerCase() : null;
    this.arrOfLists[firstLetter.charCodeAt(0) - 97].remove(userName);
  }
  search(userName) {
    let firstLetter = userName ? userName[0].toLoweCase() : null;
    let index =
      this.arrOfLists[firstLetter.charCodeAt(0) - 97].getIndex(userName);
    return index != -1 ? index : "not found";
  }
  print = () => {
    for (let i = 0; i < this.arrOfLists.length; i++) {
      console.log(i);
      for (let node of this.arrOfLists[i]) {
        console.log(node.value);
      }
    }
  };
}
let arr = new hybridDS();
//insert boys names from a to z
arr.insert("alice");
arr.insert("bebo");
arr.insert("cc");
arr.insert("DD");
arr.insert("zD");
arr.print();

//TODO implement linked list in js
class LinkedList {
  constructor() {
    this.nodes = [];
    this.length = 0;
  }
  get size() {
    return this.length;
  }
  get head() {
    return this.length ? this.nodes[0] : null;
  }
  get tail() {
    return this.length ? this.nodes[this.length - 1] : null;
  }
  insertAt(index, value) {
    const previousNode = this.nodes[index - 1] || null;
    //(3)(4)
    //insert at 4
    //(3)(4)(5)
    //that's why next is [index] and not [index+1]
    //||null handles the case of inserting first element or insert at tail[next is null]
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode };
    if (previousNode) {
      previousNode.next = node;
    }
    //put it outside if handle first element
    this.nodes.splice(index, 0, node);
    this.length++;
  }
  insertFirst(value) {
    this.insertAt(0, value);
  }
  insertLast(value) {
    this.insertAt(this.size, value);
  }
  getAt(index) {
    return this.nodes[index];
  }
  removeAt(index) {
    const previousNode = this.nodes[index - 1] || null;
    //(3)(4)(5)
    //remove at 4
    //(3)(4)
    //that's why next is [index+1] and not [index]
    //||null handles if we remove the tail
    const nextNode = this.nodes[index + 1] || null;
    if (previousNode) {
      previousNode.next = nextNode;
    }
    //put it outside if handle first element
    this.nodes.splice(index, 1);
    this.length--;
  }
  remove(value) {
    let index = this.nodes.findIndex((item) => item.value == value);
    if (index != -1) this.removeAt(index);
  }
  getIndex() {
    return this.nodes.findIndex((item) => item.value == value);
  }
  clear() {
    this.nodes = [];
    this.length = 0;
  }
  reverse() {
    this.nodes.reverse();
  }
  print() {
    for (let index = 0; index < this.length; index++) {
      console.log(this.nodes[index].value);
    }
  }
  //Define a generator method for Symbol.iterator,
  //which delegates to the nodes array's iterator using the yield* syntax
  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}
// //Test it
// const list = new LinkedList();
// list.insertFirst(1);
// list.insertFirst(2);
// list.insertFirst(3);
// list.insertLast(4);
// list.insertAt(3, 5);
// list.print(); //3 2 1 5 4
// list.size; //5
// console.log(list.head.value); //3
// console.log(list.head.next.value); //2;
// console.log(list.tail.value); //4
// list.removeAt(1); //3 1 5 4
// list.print();
// console.log(list.getAt(1).value); //1
// console.log(list.head.next.value); //1
// list.print(); //3 1 5 4
// list.reverse();
// list.print(); //4 5 1 3
// list.remove(4);
// list.remove(1);
// list.remove(3);
// list.print(); //5
// list.clear();
// list.size; //0
