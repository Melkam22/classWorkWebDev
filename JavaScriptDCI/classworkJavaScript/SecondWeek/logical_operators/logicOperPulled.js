
/* logical operators exercise */

                    /* question 1 & 2, 3*/
let a = "true";
let b = "false";
let c = 20;
let d = 30;
let e = 5;

console.log(a && b);
console.log(a || b);
console.log(!(a && b));

                    /* question 4 ....false*/

console.log((c > e) && (c>d));

/* question 5 ....true*/

console.log(!(c == d));

/* question 6 ....true*/

console.log((e < d) || (e < c));

/* question 7 ....true*/

console.log((c == e) || (c != d));

/* question 8 ....false*/

console.log((c >= 10) && (d <= 10));

/* question 10 ....true*/

/* console.log((((c * e) > 100)) || ((c * d)> 100)); */

console.log ((((c * e) > 100) || (c * d)> 100));