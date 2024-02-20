const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth/2
canvas.height = window.innerHeight/2
canvas.style.background = "white";

let mouseX = 0;
let mouseY  =0;
let isDrawing = false;
let color = "black"

const greenbtn = document.getElementById("green");
const redbtn = document.getElementById("red");
const bluebtn = document.getElementById("blue");
const clear = document.getElementById("clear")

clear.addEventListener("click", function(e){
    ctx.clearRect(0,0, canvas.width, canvas.height)
})

greenbtn.addEventListener("click", function(e){
    color = "green"
});

bluebtn.addEventListener("click", function(e){
    color = "blue"
});

redbtn.addEventListener("click", function(e){
    color = "red"
});






canvas.addEventListener("mousedown", function(e){
    isDrawing = true
    mouseX = e.clientX;
    mouseY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY)
    

})

canvas.addEventListener("mousemove", function(e){
    
    if(isDrawing){
        ctx.lineTo(e.clientX, e.clientY)
        ctx.strokeStyle = color
        
        ctx.stroke()
    }


})

canvas.addEventListener("mouseup", function(e){
    isDrawing = false

})

function downloadCanvas(){
    var imageData = canvas.toDataURL("image/png")
    let anchortag = document.createElement("a")
    document.body.appendChild(anchortag)
    anchortag.href = imageData
    anchortag.click()
    document.body.removeChild(anchortag)
}


