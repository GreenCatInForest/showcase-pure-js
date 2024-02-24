const sandbox = document.querySelector(".sandbox");

// Bit Counting

const bitCounting = document.createElement("article");
bitCounting.classList.add("bitCounting", "sandboxItem");
addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#bitCountingInput").value;
  let result = spinWords(input);
  bitCounting.innerHTML += `<p>Result: ${result}</p>`;
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
    <input type="text" id="bitCountingInput" placeholder="Place your number here, please"/>
    <button type="submit">How many bits?</button>
    </form>
    <p></p>`;

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
  let input = document.querySelector("#reverseStringInput").value;
  let result = spinWords(input);
  reverseString.innerHTML += `<p>Result: ${result}</p>`;
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
};
createSandbox();
