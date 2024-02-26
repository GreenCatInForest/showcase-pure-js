const sandbox = document.querySelector(".sandbox");

// The latest clock

const countLatestClock = (a, b, c, d) => {
  console.log(a, b, c, d);
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  d = parseInt(d);

  let countClock = () => {
    let potentialTime = [a, b, c, d];

    let hourFirstDigit = Math.max(...potentialTime.filter((num) => num <= 2));
    let index = potentialTime.indexOf(hourFirstDigit);
    let potentialTimeLite = potentialTime.toSpliced(index, 1);
    console.log(potentialTimeLite);
    let hourSecondDigit;

    hourFirstDigit > 1
      ? (hourSecondDigit = Math.max(
          ...potentialTimeLite.filter((num) => num <= 3)
        ))
      : (hourSecondDigit = Math.max(
          ...potentialTimeLite.filter((num) => num <= 9)
        ));

    index = potentialTimeLite.indexOf(hourSecondDigit);
    potentialTimeLite = potentialTimeLite.toSpliced(index, 1);
    console.log(potentialTimeLite);
    let minuteFirstDigit = Math.max(
      ...potentialTimeLite.filter((num) => num <= 5)
    );
    index = potentialTimeLite.indexOf(minuteFirstDigit);
    potentialTimeLite = potentialTimeLite.toSpliced(index, 1);
    console.log(potentialTimeLite);

    let minuteSecondDigit = Math.max(
      ...potentialTimeLite.filter((num) => num <= 9)
    );

    console.log(
      hourFirstDigit,
      hourSecondDigit,
      minuteFirstDigit,
      minuteSecondDigit
    );

    return `${(hourFirstDigit, hourSecondDigit)}:${
      (minuteFirstDigit, minuteSecondDigit)
    }`;
  };

  let checkIfNumAreSuitable = () => {
    let CheckSum = 2 + 3 + 9 + 9;
    let Sum = a + b + c + d;
    a >= 0 && b >= 0 && c >= 0 && d >= 0
      ? null
      : (document.getElementById(
          "countLatestClockError"
        ).innerHTML = `<p>Sorry, you can't enter negative numbers</p>`);
    CheckSum < Sum
      ? (document.getElementById(
          "countLatestClockError"
        ).innerHTML += `<p>Sorry, it's impossible to convert that numbers to clock time.</p>
         <p>Hint1: one of your numbers shall be less or equal 2</p>
         <p>Hint2: one of your numbers shall be less or equal to 3</p>`)
      : countClock(a, b, c, d);
  };
  checkIfNumAreSuitable();
};

const latestClockCounting = document.createElement("article");
latestClockCounting.classList.add("latestClockCounting", "sandboxItem");
addEventListener("submit", (e) => {
  e.preventDefault();
  let digit1 = document.querySelector("#digit1Input").value;
  let digit2 = document.querySelector("#digit2Input").value;
  let digit3 = document.querySelector("#digit3Input").value;
  let digit4 = document.querySelector("#digit4Input").value;
  let countLatestClockResult = countLatestClock(digit1, digit2, digit3, digit4);
  countLatestClockResult
    ? (document.getElementById("countLatestClockResult").innerHTML = "")
    : null;
  countLatestClockResult
    ? (document.getElementById(
        "countLatestClockResult"
      ).innerHTML += `<ul>Result: 
        <li>${countLatestClockResult}</li> 
    </ul>`)
    : null;
  sandbox.appendChild(latestClockCounting);
});

latestClockCounting.innerHTML = `
    <h2>The latest clock</h2>
    <h3>Description:</h3>
    <p>Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.
    The time should be in HH:MM format. Result should be a valid 24-hour time, between 00:00 and 23:59</p>
    <h3>Example:</h3>
    <p>digits: 1, 9, 8, 3 => result: "19:38"
    digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)</p>
    <h3>My Solution:</h3>
    <form id="latestClockCountingForm">
    <label for="latestClockCountingInput">Enter please your 4 digits here:</label>
    <input type="text" id="digit1Input" pattern='^[0-9]$' inputmode="numeric" placeholder="Place number here, please" required/>
    <input type="text" id="digit2Input" pattern='^[0-9]$' inputmode="numeric" placeholder="Place number here, please" required/>
    <input type="text" id="digit3Input" pattern=^[0-9]$ inputmode="numeric" placeholder="Place number less or equal 2 here, please" required/>
    <input type="text" id="digit4Input" pattern=^[0-9]$ inputmode="numeric" placeholder="Place number less or equal 3 here, please" required/>
    <button type="submit">Find the latest clock time!</button>
    </form>
    <div id="countLatestClockError"></div>
    <div id="countLatestClockResult"></div>`;

// Easy Logarithm
const countEasyLogs = (x, a, b) => {
  x = parseInt(x);
  a = parseInt(a);
  b = parseInt(b);

  let countLog = (x, a, b) => {
    let logA = Math.log(a) / Math.log(x);
    let logB = Math.log(b) / Math.log(x);
    return logA + logB;
  };

  if (x > 1 && a > 0 && b > 0) {
    return countLog(x, a, b);
  } else console.log("Please enter base >1 and numbers > 0");
};

// Playing with the logs

// let a = 10;
// b = 3;
// c = 3;
// let i = 0;
// let array = [];

// for (let i = 0; i < c; i++) {
//   let n = a ** i;
//   n < c ? array.push(n) : null;
// }

// console.log(array);

const logCounting = document.createElement("article");
logCounting.classList.add("logCounting", "sandboxItem");
addEventListener("submit", (e) => {
  e.preventDefault();
  let baseLog = document.querySelector("#logBaseInput").value;
  let number1 = document.querySelector("#log1NumberInput").value;
  let number2 = document.querySelector("#log2NumberInput").value;
  let countEasyLogsResult = countEasyLogs(baseLog, number1, number2);
  countEasyLogsResult
    ? (document.getElementById("logCountingResult").innerHTML = "")
    : null;
  countEasyLogsResult
    ? (document.getElementById("logCountingResult").innerHTML += `<ul>Result: 
        <li>${countEasyLogsResult}</li> 
    </ul>`)
    : null;
  sandbox.appendChild(logCounting);
});

logCounting.innerHTML = `
    <h2>Easy Logarithm Counting</h2>
    <h3>Description:</h3>
    <p>Given a logarithm base X and two values A and B, return a sum of logratihms with the base X.</p>
    <h3>My Solution:</h3>
    <form id="logCountingForm">
    <label for="logCountingInput">Enter a base for the logarithm and a numbers here:</label>
    <input type="number" id="logBaseInput" pattern="[0-9]*" inputmode="numeric" placeholder="Place your base number here, please" required/>
    <input type="number" id="log1NumberInput" pattern="[0-9]*" inputmode="numeric" placeholder="Place your first number here, please" required/>
    <input type="number" id="log2NumberInput" pattern="[0-9]*" inputmode="numeric" placeholder="Place your second number here, please" required/>
    <button type="submit">Add logs</button>
    </form>
    <div id="logCountingResult"></div>`;

// Bit Counting

let countBits = (n) => {
  let binaryN = [];
  n = parseInt(n);

  let defineBinary = (a) => {
    while (a > 0) {
      let digit = a % 2;
      binaryN.unshift(digit);
      a = Math.floor(a / 2);
    }
    return (
      (numberOfBits = binaryN.filter(
        (binaryDigit) => binaryDigit === 1
      ).length),
      (binaryNumber = binaryN.join(""))
    );
  };

  if (n < 0) {
    console.log("The number is negative, please enter the correct number");
  } else {
    return defineBinary(n);
  }
};

const bitCounting = document.createElement("article");
bitCounting.classList.add("bitCounting", "sandboxItem");
addEventListener("submit", (e) => {
  e.preventDefault();

  let number = document.querySelector("#bitCountingInput").value;
  let countBitsResult = countBits(number);
  document.getElementById("result").innerHTML = "";
  countBitsResult
    ? (document.getElementById("result").innerHTML += `<ul>Result: 
        <li>Your number is: ${number} </li>
        <li>Binary interpretation: ${binaryNumber}</li>
        <li>Number of bits: ${numberOfBits}</li> 
    </ul>`)
    : null;
  sandbox.appendChild(bitCounting);
});

bitCounting.innerHTML = `
    <h2>Bit Counting</h2>
    <h3>Description:</h3>
    <p>Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.</p>

    <h3>Examples:</h3>
    
    <p>The binary representation of 1234 is 10011010010. In this binary representation, there are five bits that are equal to one: 1, 1, 1, 1, and 1. So the function should return 5 in this case</p>

    <h3>My Solution:</h3>
    
    <form id="bitCountingForm">
    <label for="bitCountingInput">Enter a number</label>
    <input type="number" id="bitCountingInput" pattern="[0-9]*" inputmode="numeric" placeholder="Place your number here, please"/>
    <button type="submit">How many bits?</button>
    </form>
    <div id="result"></div>`;

// Reverse String

let spinWords = (string) => {
  let stringToArray = string.split(" ");

  let reversedArray = stringToArray.map((stringElement) => {
    let singleWord = stringElement.split("");
    return singleWord.length >= 5
      ? singleWord.reverse().join("")
      : singleWord.join("");
  });
  return reversedArray.join(" ");
};

const reverseString = document.createElement("article");
reverseString.classList.add("reverseString", "sandboxItem");
addEventListener("submit", (e) => {
  e.preventDefault();
  let string = document.querySelector("#reverseStringInput").value;
  let resultReverseString = spinWords(string);
  resultReverseString &&
    (reverseString.innerHTML += `<p>Result: ${resultReverseString}</p>`);
  sandbox.appendChild(reverseString);
});

reverseString.innerHTML = `
    <h2>Reverse String</h2>
    <h3>Description:</h3>
    <p>Write a function that takes 
    in a string of one or more words, 
    and returns the same string, but with 
    all words that have five or more letters 
    reversed. 
    Strings passed in will consist of only letters and spaces. 
    Spaces will be included only when more 
    than one word is present.</p>

    <h3>Examples:</h3>
    
    <p>"Hey fellow warriors"  --> "Hey wollef sroirraw" 
    "This is a test        --> "This is a test" 
    "This is another test" --> "This is rehtona test"</p>

    <h3>My Solution:</h3>
    
    <form id="reverseStringForm">
    <label for="reverseStringInput">Enter a string</label>
    <input type="text" id="reverseStringInput" placeholder="Place your sentence here, please"/>
    <button type="submit">Reverse</button>
    </form>
    <p></p>`;

const createSandbox = () => {
  sandbox.innerHTML = `
    <h1 class="text">Sandbox</h1>`;
  sandbox.appendChild(reverseString);
  sandbox.appendChild(bitCounting);
  sandbox.appendChild(logCounting);
  sandbox.appendChild(latestClockCounting);
};
createSandbox();
