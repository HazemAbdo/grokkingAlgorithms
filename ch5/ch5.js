//Hashing
//you can think @ hash table as an array with a hash function
//NOTE  (array+hash function)==>hash table
//NOTE Hashes are good @:
//1.Modeling a relationship from one thing to another
//key=>value lookup
//Suppose you want to build a phone book like this. You’re mapping
//people’s names to phone numbers.
let phoneBook = new Map();
phoneBook.set("John", "555-1234");
phoneBook.set("Mary", "555-2345");
phoneBook.set("Bob", "555-3456");
phoneBook.get("John");
phoneBook.has("Bob");
//2.Filtering out duplicates
//e.g. Suppose you’re running a voting booth. Naturally, every person can
//vote just once. How do you make sure they haven’t voted before? When
//someone comes in to vote, you ask for their full name. Then you check
//it against the list of people who have voted.
let voted = new Map();
function vote(voter) {
  if (voted.has(voter.name)) {
    console.log("go out");
  } else {
    console.log("welcome");
    voted.set(voter.name, voter.data);
  }
}
let voter1 = {
  name: "tom",
  data: "123",
};
let voter2 = {
  name: "jerry",
  data: "456",
};
let voter3 = {
  name: "haha",
  data: "356",
};
vote(voter1);
vote(voter2);
vote(voter2);
vote(voter1);
vote(voter3);
console.log(voted);
//3.Caching/memorizing data instead of making your server do work
// This is how caching works: websites remember the data instead of recalculating it
let cache = new Map();
function getCachedData(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  let data = fetch(url).then((res) => res.json());
  cache.set(url, data);
  return data;
}
//------------------------------------------------------------------------------
//key-->hashCode-->index
//if two keys have the same index-->collision
//to handle collision
//1.replacement
//2.probing-->linear or quadratic
//3.chaining
//string-->hashFunction-->number
//your hash function would map keys evenly all over the hash
//------------------------------------------------------------------------------
//1.NOTE average case of hash function is O(1) at everything(insertion, lookup, deletion)
//Look at the average case for hash tables. Hash tables are as fast as arrays
//at searching (getting a value at an index). And they’re as fast as linked
//lists at inserts and deletes. It’s the best of both worlds!
//2.NOTE worst case of hash function is O(n) at everything(insertion, lookup, deletion)
//But in the worst case, hash tables are slow at all of those
//NOTE  So it’s important that you don’t hit worst-case performance with hash tables
//And to do that, you need to avoid collisions. To avoid collisions, you need
//1.a low load factor
//load factor is the ratio of the number of items in the hash table to the number of slots
//With a lower load factor, you’ll have fewer collisions, and your table will perform better.
//A good rule of thumb is, resize when your load factor is greater than 0.7.
//This resizing business takes a lot of time!” And you’re right. Resizing is expensive,and you
//don’t want to resize too often. But averaged out, hash tables take O(1) even with resizing
//2.a good hash function
//It’s important for hash functions to have a good distribution. They ttshould map items
//as broadly as possible. The worst case is a hash function that maps all items to the
//same slot in the hash table
//------------------------------------------------------------------------------
class HashTable {
  constructor() {
    this.table = new Array(127).fill(undefined, 0, 127);
    this.size = 0;
  }
  //get key and return index
  _hash(key) {
    return (
      key
        .split("")
        .reduce((acc, current) => (acc += current.charCodeAt(0)), 0) %
      this.table.length
    );
  }
  set(key, value) {
    const index = this._hash(key);
    if (typeof this.table[index] === "undefined") {
      this.table[index] = [key, value];
      this.size++;
    }
  }
  get(key) {
    const index = this._hash(key);
    return this.table[index] || null;
  }
  remove(key) {
    if (this.table[this._hash(key)]?.key === key) {
      this.table[this._hash(key)] = undefined;
    } else console.log("not a valid key");
  }
}
const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]
