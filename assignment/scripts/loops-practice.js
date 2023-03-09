console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
/*
We would need to change i<4 to i<6
*/
for (let i=0; i<6; i++) {
  console.log(i);
}
/*
Another version with only utilizing the numbers in question
*/
console.log('Here is another version of 1.a. that only includes the numbers in question');
for (let i=0; i<=5; i++) {
  console.log(i);
}


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
/*
We would need to change i=0 to i=3
and
We would need to change i<4 to i<6
*/
for (let i=3; i<6; i++) {
  console.log(i);
}
/*
Another version with only utilizing the numbers in question
*/
console.log('Here is another version of 1.b. that only includes the numbers in question');
for (let i=3; i<=5; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
/*
We would need to change i=0 to i=2
and
We would need to change i<4 to i<11
and 
We would need to change i++ to i+=2
*/
for (let i=2; i<11; i+=2) {  
  console.log(i);
}
/*
Another version with only utilizing the numbers in question
*/
console.log('Here is another version of 1.c. that only includes the numbers in question (and plays with remainder to find if even)');
for (let i=2; i<=10; i+=2) {
  if (i%2 === 0) { 
    console.log(i);
  } //This checks if i is divided by 2 and the remainder is 0, then if would log the initial value of i.
    //We could use this to instead increment 1 at a time or 3 at a time and still consistely only log the even numbers.
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >- 1; i--) {  
  console.log(i);
}
/*
Another version with only utilizing the numbers in question
*/
console.log('Here is another version of 1.d. that only includes the numbers in question');
for (let i = 5; i >= 0; i--) {  
  console.log(i);
}


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (star of stars) {
  console.log(star);
}


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i=0;
let Star='';
while (stars[i]) {
  Star+= (stars[i]);
  console.log(stars[i]);
  i++
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let n=0
while (n<6) {
  console.log(n);
  n++;
}
/*
Another version with only utilizing the numbers in question
*/
console.log('Here is another version of 3.b. that only includes the numbers in question');
let N=0
while (N<=5) {
  console.log(N);
  N++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let x=10
while (x>4) {
  console.log(x);
  x--
}
/*
Another version with only utilizing the numbers in question
*/
console.log('Here is another version of 3.c. that only includes the numbers in question');
let X=10
while (X>=5) {
  console.log(X);
  X--
}
