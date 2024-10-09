const box = document.querySelector("#box");

setTimeout(() => {
  box.style.backgroundColor = "red";
  setTimeout(() => {
    box.style.fontSize = "50px";
    setTimeout(() => {
      box.style.backgroundColor = "purple";
    }, 5000);
  }, 5000);
}, 5000);
