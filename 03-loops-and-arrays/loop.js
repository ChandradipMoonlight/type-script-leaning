var num = [1, 2, 3, 4.5, 6, 8];
var total = 0;
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
    total += num[i];
}
console.log("use of simplied for loop");
//lets use simplied for loops
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var numbers = num_1[_i];
    console.log(numbers);
}
var avg = total / num.length;
console.log("num Average is = " + avg);
