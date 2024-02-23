const sandbox = document.querySelector(".sandbox");

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
reverseString.classList.add("reverseString");
addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#reverseStringInput").value;
  let result = spinWords(input);
  reverseString.innerHTML += `<p>${result}</p>`;
  sandbox.appendChild(reverseString);
});

reverseString.innerHTML = `
    <h2>Reverse String</h2>
    <h3>Description</h3>
    <p>Write a function that takes 
    in a string of one or more words, 
    and returns the same string, but with 
    all words that have five or more letters 
    reversed. 
    Strings passed in will consist of only letters and spaces. 
    Spaces will be included only when more 
    than one word is present.</p>

    <h3>Examples:</h3>
    
    "Hey fellow warriors"  --> "Hey wollef sroirraw" 
    "This is a test        --> "This is a test" 
    "This is another test" --> "This is rehtona test"</p>

    <h3>My Solution</h3>
    
    <form id="reverseStringForm">
    <label for="reverseStringInput">Enter a string</label>
    <input type="text" id="reverseStringInput" />
    <button type="submit">Reverse</button>
    </form>
    <p></p>`;

const createSandbox = () => {
  sandbox.innerHTML = `
    <h1>Sandbox</h1>`;
  sandbox.appendChild(reverseString);
};
createSandbox();
