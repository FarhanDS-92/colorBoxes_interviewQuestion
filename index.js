// an array which we push the targeted event into, to keep track of the sequence
let arrayOrder = [];

// query selecting all buttons
const buttons = document.querySelectorAll(".square");

// by querying all buttons we can do a for...of loop to keep it dry with a listener to each button
for (const button of buttons) {
  button.addEventListener("click", updateSquares);
}

// function to update squares, user has the choice to click the square again and remove said targeted event from array
function updateSquares(e) {
  // setting target
  const btn = e.target;

  // statement to check if user already clicked on said target square, if they didn't we push the id of the button to the array to keep track if not, we remove the target by getting the indexOf target and splicing --- as all ids are unique we won't come across a situation where we target the wrong square
  if (btn.style.backgroundColor === "green") {
    btn.style.backgroundColor = "white";
    const index = arrayOrder.indexOf(btn.id);

    if (index > -1) {
      arrayOrder.splice(index, 1);
    }
  } else {
    btn.style.backgroundColor = "green";
    arrayOrder.push(btn.id);
  }

  if (arrayOrder.length === 6) {
    reverseSquares();
  }
}

// function that when the length of the arrayOrder is 6, meaning all buttons have been clicked we can no reverse the order of the array and thereby go through a for...of loop to change the color of each square using a timeOut function and using .entries() to have a way to know the index of each id in the array and thereby being able to setTimeout each color transition with 1000*index --- then reset for another new game
function reverseSquares() {
  arrayOrder.reverse();

  for (const [index, id] of arrayOrder.entries()) {
    let reverseBtn = document.getElementById(id);

    setTimeout(() => {
      reverseBtn.style.backgroundColor = "white";
    }, (index + 1) * 1000);
  }
  arrayOrder = [];
}
