const countDistancePillars = (x, a, b) => {};

const pillars = document.createElement("article");
pillars.classList.add("pillars", "sandboxItem");
addEventListener("submit", (e) => {
  e.preventDefault();
  let numOfPillars = document.querySelector("#numOfPillarsInput").value;
  let distance = document.querySelector("#distanceInput").value;
  let widthOfPillar = document.querySelector("#widthOfPillarInput").value;
  let countDistancePillarsResult = countDistancePillars(
    numOfPillars,
    distance,
    widthOfPillar
  );
  countDistancePillarsResult
    ? (document.getElementById("countDistancePillarsResult").innerHTML = "")
    : null;
  countDistancePillarsResult
    ? (document.getElementById(
        "countDistancePillarsResult"
      ).innerHTML += `<ul>Result: 
          <li>${countDistancePillarsResult}</li> 
      </ul>`)
    : null;
  sandbox.appendChild(pillars);
});

pillars.innerHTML = `
      <h2>Pillars</h2>
      <h3>Description:</h3>
      <p>There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same.</p> 
      <p>Your function accepts three arguments:
      <ol> 
      <li>number of pillars (≥ 1);</li>
      <li>distance between pillars (10 - 30 meters);</li>
      <li>width of the pillar (10 - 50 centimeters).</li>
      <ol>
      </p>
      <p>Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).</p>  
      <h3>Example:</h3>
      <p>pillars (11, 15, 30) => 15270</p>
      <p>pillars (2, 20, 25) => 2000</p>
      </p>
      <h3>My Solution:</h3>
      <form id="pillarsForm">
      <label for="pillarsInput">Enter a number of pillars, distance beetween them and width of the pillar</label>
      <input type="number" id="numOfPillarsInput" pattern="[0-9]*" inputmode="numeric" placeholder="How many pillars?" required/>
      <input type="number" id="distanceInput" pattern="[0-9]*" inputmode="numeric" placeholder="Distance between pillars" required/>
      <input type="number" id="widthOfPillar" pattern="[0-9]*" inputmode="numeric" placeholder="Width of the pillar" required/>
      <button type="submit">Calculate the distance</button>
      </form>
      <div id="countDistancePillarsResult">
      </div>`;
