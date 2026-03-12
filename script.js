const knapp = document.getElementById("toggleProsjekter");
const prosjektContainer = document.getElementById("prosjekt20");

knapp.addEventListener("click", () => {
  prosjektContainer.classList.toggle("hidden");

  if (prosjektContainer.classList.contains("hidden")) {
    knapp.textContent = "Vis prosjekter";
  } else {
    knapp.textContent = "Skjul prosjekter";
  }
});

document.querySelector(".about-link").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
});
