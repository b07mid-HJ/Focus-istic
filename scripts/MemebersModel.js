let close8 = document.getElementById("close8");
let min8 = document.getElementById("min8");
let btn8 = document.getElementById("btn8");
let Members = document.getElementById("Members");
let MembersModal = document.getElementById("MembersModal");


Members.addEventListener("click", (evt) => {
  evt.preventDefault();
  MembersModal.style.display = "block";
  btn8.style.display = "flex";

  
});

min8.addEventListener("click", (evt) => {
  if ((MembersModal.style.display = "block")) {
    MembersModal.style.display = "none";
  }
});

close8.addEventListener("click", (evt) => {
  if ((MembersModal.style.display = "block")) {
    MembersModal.style.display = "none";
    btn8.style.display = "none";
  }
});

// App bar modal#8
btn8.addEventListener("click", (evt) => {
  if (width1 > 900) {
    MembersModal.style.left = "200px";
    MembersModal.style.top = "200px";
  }

  if ((MembersModal.style.display = MembersModal.style.display === "block")) {
    MembersModal.style.display = "none";
  } else {
    MembersModal.style.display = "block";
  }
});

// Modal on click z-index
MembersModal.addEventListener("click", (evt) => {
  MembersModal.style.zIndex = +"1";
});

// Modal 1 Windows move
var mousePosition1;
var offset1 = [0, 0];
var div1 = document.getElementById("MembersModal");
var isDown1 = false;

div1.addEventListener(
  "mousedown",
  function (e) {
    isDown1 = true;
    offset1 = [div1.offsetLeft - e.clientX, div1.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown1 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown1) {
      mousePosition1 = {
        x: event.clientX,
        y: event.clientY,
      };
      div1.style.left = mousePosition1.x + offset1[0] + "px";
      div1.style.top = mousePosition1.y + offset1[1] + "px";

      div1.style.marginTop = "0px";
    }
  },
  true
);