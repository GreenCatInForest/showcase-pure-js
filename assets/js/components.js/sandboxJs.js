const showcast = document.querySelector(".showcast");

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

const reverseString = document.querySelector("#reverseString");
const reverseStringJs = document.createElement("article");
addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#reverseStringInput").value;
  let result = spinWords(input);
  reverseStringJs.innerHTML += `<p>${result}</p>`;
  sandboxJs.appendChild(reverseStringJs);
});

reverseStringJs.innerHTML = `
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
  sandboxJs = document.createElement("article");
  sandboxJs.classList.add("sandboxJs");
  sandboxJs.innerHTML = `
    <h2>Vanilla JS Sandbox Showcast</h2>`;
  showcast.appendChild(sandboxJs);
  sandboxJs.appendChild(reverseStringJs);
};
createSandbox();
