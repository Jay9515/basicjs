alert("Hello JavaScript!");



let adminUser;
let GeneralUser;

GeneralUser = "Test User";

adminUser = GeneralUser;

alert(adminUser); 

let planetName;

let visitorName;

// function for calculate sum
function calculateSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

//   
  
  console.log(calculateSum(4)); // Output: 10

// functions that accepts string
  function generateGreeting(name, binaryNumber) {
    if (binaryNumber === 1) {
      return "Hello " + name;
    } else if (binaryNumber === 0) {
      return "Bye " + name;
    } else {
      return "Invalid binary number!";
    }
  }
  
  console.log(generateGreeting("Jay", 1)); // Output: Hello jay
  console.log(generateGreeting("prakash", 0)); // Output: Bye prakash
  
  
