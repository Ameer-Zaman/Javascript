let linkInput = document.getElementById("link-input");
const generate = document.getElementById("generatorBtn");
let imgContainer = document.getElementById("img-container");

linkInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){

        if(linkInput.value === ""){
            window.alert("Enter your URL")
        } else {
            qr();
        }
        
    }
});

function qr() {
    const linkInputValue = linkInput.value.trim();

    const fgColor = "0-0-0";
    const bgColor = "255-255-255";

    const api = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(linkInputValue)}&size=300x300&color=${fgColor}&bgcolor=${bgColor}`;

    imgContainer.innerHTML = "";
    imgContainer.classList.remove("has-image"); // reset container size first

    const img = document.createElement("img");
    img.src = api;
    img.alt = "your qr code";
    img.classList.add("qr-fade");

    img.onload = () => {
        imgContainer.classList.add("has-image"); // container expands
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                img.classList.add("show"); // image fades in
            });
        });
    };

    imgContainer.appendChild(img);
}
