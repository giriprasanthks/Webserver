function getMessage() {
  fetch("http://BACKEND-IP:3000")
    .then(res => res.text())
    .then(data => {
      document.getElementById("output").innerText = data;
    });
}
