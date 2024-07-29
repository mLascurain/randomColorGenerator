const $container = document.querySelector(".main__container");

for(let i = 0; i < 3; i++){
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("colorContainer");
    $container.appendChild(colorContainer);
}

const containers = document.querySelectorAll(".colorContainer");

loadColors()

function loadColors(){
    containers.forEach((container) => {
        const newColor = colorGenerator();
        console.log(newColor);
        container.style.backgroundColor = "#" + newColor;
        container.innerText = "#" + newColor;
    });
}

function colorGenerator(){
    const chars = "0123456789ABCDEF";
    const colorLength = 6;
    let colorCode = ""
    for(let j = 0; j < colorLength; j++){
        const randomPick = Math.floor(Math.random() * chars.length); 
        colorCode += chars.substring(randomPick, randomPick + 1);
    }
    console.log(colorCode);
    return colorCode;
}