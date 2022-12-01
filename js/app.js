const colors = ["blue", "red", "orange", "yellow", "pink", "green", "purple", "black", "brown", "grey", "aqua", "lime"]

const btn= document.getElementById("btn")
const colorName = document.getElementById("color")

btn.addEventListener("click", function() {
    const randomColor = getRandomNumber();

    document.body.style.background = colors[randomColor];
    colorName.textContent = colors[randomColor];
})

function getRandomNumber (){
    return Math.floor(Math.random() *colors.length)
}