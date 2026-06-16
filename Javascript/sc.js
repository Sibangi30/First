try {
 
  let number = 10;
  let result = number / 0; 
  console.log("Result is:", result);

  
  throw new Error("error ");
} 
catch (error) {
  
  console.error("Caught an error:", error.message);
} 
finally {
  
  console.log("execution is complete.");
}
