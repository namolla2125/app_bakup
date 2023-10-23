const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

const ctx = canvas.getContext("2d");


let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;
ctx.strokeStyle = "#f2ae1d"
toolbar.addEventListener("change", e => {
  if(e.target.id === "stroke"){
    ctx.strokeStyle = e.target.value;
  }
  if(e.target.id === "lWidth"){
    lineWidth = e.target.value;
  }
})
toolbar.addEventListener("click", e => {
  if(e.target.id === "reset"){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
})

canvas.addEventListener("mousedown", e => {
  document.body.style.overflow = "hidden";
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
  console.log(startX + " : " + e.clientY);
})
canvas.addEventListener("mousemove", (e) => {
  if(!isDrawing) return;
  document.body.style.overflow = "hidden";
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  // - canvasOffsetY
  ctx.stroke();
})
canvas.addEventListener("mouseup", () => {
  document.body.style.overflow = "auto";
  isDrawing = false;
  ctx.beginPath();
})

canvas.addEventListener("touchstart", e => {
  document.body.style.overflow = "hidden";
  isDrawing = true;
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
  console.log(startX + " : " + e.clientY);
  console.log("a");
})
canvas.addEventListener("touchmove", (e) => {
  if(!isDrawing) return;
  document.body.style.overflow = "hidden";
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY - canvasOffsetY);
  // - canvasOffsetY
  ctx.stroke();
  console.log("b");
})
canvas.addEventListener("touchend", () => {
  document.body.style.overflow = "auto";
  isDrawing = false;
  ctx.beginPath();
  console.log("c");
})