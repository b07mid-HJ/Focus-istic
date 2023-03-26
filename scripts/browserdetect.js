

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = "" + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;


if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 4);
}

else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 6);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}

else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
  browserName = "Microsoft Edge";
  fullVersion = nAgt.substring(verOffset + 5);
}
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
  browserName = "Google Chrome";
  fullVersion = nAgt.substring(verOffset + 7);
}
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset + 7);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  fullVersion = nAgt.substring(verOffset + 8);
}
else if (
  (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))
) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
}
if ((ix = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt("" + fullVersion, 10);
if (isNaN(majorVersion)) {
  fullVersion = "" + parseFloat(navigator.appVersion);
  majorVersion = parseInt(navigator.appVersion, 10);
}

let browserDetectato = browserName;


let imgChrome = document.getElementById("imgChrome");
let parChrome = document.getElementById("parChrome");

if (browserName === "Chrome") {
  imgChrome.setAttribute("src", "img/chrome.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Firefox") {
  imgChrome.setAttribute("src", "img/firefox.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Microsoft Edge") {
  imgChrome.setAttribute("src", "img/edge.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Opera") {
  imgChrome.setAttribute("src", "img/opera.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Safari") {
  imgChrome.setAttribute("src", "img/safari.png");
  parChrome.innerHTML = browserName;
}

let textChrome = document.getElementById("textChrome");
textChrome.innerHTML = `You are already in ${browserDetectato}`;

let newtab = document.getElementById("newtab");
newtab.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.open("https://www.facebook.com/profile.php?id=100091302813770");
});
