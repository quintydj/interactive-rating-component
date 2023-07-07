// Als ik op een nummer klik en daarna op submit klik
// Wil ik dat het nummer getoont word op de nieuwe pagina en dat de oude pagina niet te zien is

// Ik wil de nummers doorgeven hoe doe ik dit?
// Gebruik van variabelen

// Ik wil de pagina verbergen op het moment van klikken op submit (ALS EEN WAARDERING IS GEGEVEN)
// If statement om te kijken of er een waardering is en op submit is geclicked

const ster1 = document.querySelector(".ster1");
const ster2 = document.querySelector(".ster2");
const ster3 = document.querySelector(".ster3");
const ster4 = document.querySelector(".ster4");
const ster5 = document.querySelector(".ster5");
const submit = document.querySelector(".buttonSubmit");
const deel1 = document.querySelector(".deel1");
const deel2 = document.querySelector(".verstopt");
const tekst = document.querySelector(".ratingTekst");

ster1.addEventListener("click", () => {
  ster1.value = 1;
  tekst.textContent = "You selected 1 out of 5";
});

ster2.addEventListener("click", () => {
    ster2.value = 2;
    tekst.textContent = "You selected 2 out of 5";
});

ster3.addEventListener("click", () => {
    ster3.value = 3;
    tekst.textContent = "You selected 3 out of 5";
});

ster4.addEventListener("click", () => {
    ster4.value = 4;
    tekst.textContent = "You selected 4 out of 5";
});

ster5.addEventListener("click", () => {
    ster5.value = 5;
    tekst.textContent = "You selected 5 out of 5";
});

submit.addEventListener("click", () => {
  if (
    (ster1.value !== "") |
    (ster2.value !== "") |
    (ster3.value !== "") |
    (ster4.value !== "") |
    (ster5.value !== "")
  ) {
    deel1.style.display = "none";
    deel2.style.display = "flex";
  } else {
    alert("Please choose a rating");
  }
});
