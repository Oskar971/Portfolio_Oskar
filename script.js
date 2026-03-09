const popup = document.getElementById("popup");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = function () {
  popup.style.display = "block";
};

closeBtn.onclick = function () {
  popup.style.display = "none";
};
