const containerDiv = document.querySelector(".container");
const gridBtn = document.querySelector("button");
let btnPressed = false;
let numberOfSquares = 0; 

function createGrid(booleanPressed) {
    if (booleanPressed) {
        containerDiv.innerHTML = "";

        for (let i = 1; i <= numberOfSquares; i++) {
            const newDiv = document.createElement("div");
            newDiv.id = `grid-${i}`;
            newDiv.className = "gridClass";

            for (let j = 1; j <= numberOfSquares; j++) {
                const innerDiv = document.createElement("div");
                innerDiv.className = `grid-inner`;
                newDiv.appendChild(innerDiv);

                innerDiv.addEventListener("mouseenter", (event) => {
                    event.target.style.backgroundColor = "black";
                })
            }

            containerDiv.appendChild(newDiv);
        }
    }
}   

for (let i = 1; i <= 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = `grid-${i}`;
    newDiv.className = "gridClass";

    for (let j = 1; j <= 16; j++) {
        const innerDiv = document.createElement("div");
        innerDiv.className = `grid-inner`;
        newDiv.appendChild(innerDiv);

        innerDiv.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        })
    }

    containerDiv.appendChild(newDiv);
}

gridBtn.addEventListener("click", (event) => {
    btnPressed = true;
    numberOfSquares = prompt("Number of squares per side for the new grid (1-100):");
    numberOfSquares = parseInt(numberOfSquares);
    if (numberOfSquares > 0 && numberOfSquares <101) {
        createGrid(btnPressed);
    } else {
        alert("Please enter a number between 1 and 100");
    }
    
})

