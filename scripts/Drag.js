const containers = document.querySelectorAll('.container-sezioni');
containers.forEach(container => {
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("mousedown", dragStart);
container.addEventListener("mouseup", dragEnd);
container.addEventListener("mousemove", drag);

function dragStart(event) {
  initialX = event.clientX - xOffset;
  initialY = event.clientY - yOffset;

  if (event.target === container) {
    isDragging = true;
    container.classList.add("dragging");
  }
}

function dragEnd(event) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
  container.classList.remove("dragging");
}

function drag(event) {
  if (isDragging) {
    event.preventDefault();

    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, container);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
});