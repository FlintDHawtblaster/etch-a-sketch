const containerDiv = document.querySelector(".container");

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

