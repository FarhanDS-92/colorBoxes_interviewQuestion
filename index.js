let arrayOrder = [];
const buttons = document.querySelectorAll(".square");

for (const button of buttons) {
  button.addEventListener("click", updateSquares);
}

function updateSquares(e) {
  const btn = e.target;

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
