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
