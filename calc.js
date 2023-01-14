const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  const tokens = input.split(" ");

  //   console.log(tokens);

  const mathSymbol = tokens[0];
  const num1 = Number(tokens[1]);
  const num2 = Number(tokens[2]);

  //   console.log("mathSymbol", mathSymbol);
  //   console.log("num1", num1);
  //   console.log("num2", num2);

  if (mathSymbol === "sqrt") {
    console.log(`Square root of ${num1} is`, Math.sqrt(num1));
  } else if (mathSymbol === "+") {
    console.log(num1 + num2);
  } else if (mathSymbol === "-") {
    console.log(num1 - num2);
  } else if (mathSymbol === "*") {
    console.log(num1 * num2);
  } else if (mathSymbol === "/") {
    console.log(num1 / num2);
  } else {
    console.log(
      "syntax error. Please format input as 'symbol number number' or for square root enter as 'sqrt number' "
    );
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
