function fib(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  else return fib(num - 1) + fib(num - 2);
}
// console.log(fib(1));//1
// console.log(fib(2));//1
// console.log(fib(3));//2
// console.log(fib(4));//3
// console.log(fib(5));//5
// console.log(fib(6));//8
function tailFib(num, acc = 1, oldAcc = 0) {
  if (num == 0) return oldAcc;
  if (num == 1) return acc;
  else return tailFib(num - 1, acc + oldAcc, acc);
}
console.log(tailFib(1));
console.log(tailFib(2));
console.log(tailFib(3));
console.log(tailFib(4));
console.log(tailFib(5));
//-----------------------------------------------------------------------------
//NOTE Tail Recursion MORE EFFICIENT MEMORY USAGE
//NOTE make calculations then make recursive call
function tailFact(n, acc = 1) {
  if (n == 1) return acc;
  else return tailFact(n - 1, acc * n);
}
console.log(tailFact(6)); //720
//fact(1,120)-->120
//fact(2,60)
//fact(3,20)
//fact(4,5)
//fact(5)
//-----------------------------------------------------------------------------
//It is a non tail recursive function
//NOTE make all recursive calls then make calculations
//it takes the triangle shape
//fact(5)=5*fact(4)
//        5*(4*fact(3))
//        5*(4*(3*fact(2)))
//        5*(4*(3*(2*fact(1))))
//        5*(4*(3*(2*1)))
//        5*(4*(3*2))
//        5*(4*6)
//        5*24
//        120
//Note how every recursive call has to complete before the JavaScript
// interpreter begins to actually do the work of calculating the MULTIPLICATION.
function fact(num) {
  if (num == 1) return 1;
  else return num * fact(num - 1);
}
console.log(fact(5));
//fact(1) return 1
//fact(2) return 2*fact(1)=2
//fact(3) return 3*fact(2)=6
//fact(4) return 4*fact(3)=24
//fact(5) return 5*fact(4)=120
//-------------------------------
//base case fact(1)=1
//recursive case fact(n)=n*fact(n-1)
//-----------------------------------------------------------------------------
function greet(name) {
  console.log("hello," + name);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
}
function greet2(name) {
  console.log("how are you, " + name + "?");
}
function bye() {
  console.log("ok bye!");
}
greet("hazem");
//-----------------------------------------------------------------------------
function countDown(i) {
  //base case
  if (i <= 0) return;
  console.log(i);
  countDown(i - 1);
}
countDown(10);
