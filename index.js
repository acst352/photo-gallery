const main = document.querySelector("main");

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();

  let counter = 0; // Counter variable

  photos.forEach((p) => {
    if (counter >= 100) {
      // If 100 images have been added, the loop stops
      return;
    }

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = p.url;

    const title = document.createElement("h3");
    title.textContent = p.title;

    card.append(img, title);
    main.append(card);

    counter++; // Increment counter after adding an image
  });
}

getData();

// Assign the scroll event to the window.
window.addEventListener("scroll", () => {
  const gotopbtn = document.querySelector(".gotopbtn");

  if (window.scrollY > 100) {
    // Show the button when the user has scrolled a certain distance down.
    gotopbtn.style.display = "block";
  } else {
    // Hide the button otherwise.
    gotopbtn.style.display = "none";
  }
});
