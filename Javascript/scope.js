var x = 1;
const z = 3;

function myFunction() {
  for (let i = 0; i < 5; i++) {
    console.log("Loop iteration:", i);
  }

  let count = 0;
  while (count < 3) {
    console.log("While loop count:", count);
    count++;
  }

  if (x < z) {
    console.log("x is less than z");
  } else {
    console.log("x is greater than or equal to z");
  }
}

// Call the function
myFunction();

