let num: number[] = [1, 2, 3, 4.5, 6, 8];

let total: number=0;
for (let i=0; i < num.length; i++) {
  console.log(num[i]);
  total += num[i];
}

console.log("use of simplied for loop");

//lets use simplied for loops

for (let numbers of num) {
  console.log(numbers);
}

let avg: number=total/num.length;
console.log("num Average is = "+avg);