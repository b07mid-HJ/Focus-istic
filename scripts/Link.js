function loadPage(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('box2').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
