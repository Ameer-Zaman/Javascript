
function roll(){
    let image = document.getElementById("img");
    image.classList.add("roll");

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
        image.src = `images/${randomNumber}.png`;
    }, 250)

    setTimeout(() => {
        image.classList.remove("roll");
    }, 500)
    
}

