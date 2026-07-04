function roll(){
    let image = document.getElementById("img");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    image.src = `images/${randomNumber}.png`;
}