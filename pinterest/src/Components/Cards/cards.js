
import "./cards.css";


export function cards(query) {
  const accessKey = "BHMev0wXRyHqojE13-VV7OJmQFRkP1f_GxT3K3z5CA0";
  const endPoint = 'https://api.unsplash.com/search/photos';

  async function getImages(query) {
    try {
      let response = await fetch(`${endPoint}?query=${query}&client_id=${accessKey}`);
      let jsonResponse = await response.json();
      let imagesList = jsonResponse.results;

      createImages(imagesList);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  function createImages(imagesList) {
    const page = document.querySelector(".gallery");

    page.innerHTML = '';

    if (imagesList.length === 0) {

      const textContainer = document.createElement("div");
      const text = document.createElement("h3");
      text.innerText = "¡Ups! Aquí no hay nada...";
      
      textContainer.appendChild(text);
      page.appendChild(textContainer);
      return; 
    }

    const galleryTrack = document.createElement("div");
    galleryTrack.className = "gallery-track";

    imagesList.forEach(imageData => {
      const galleryCard = document.createElement("div");
      galleryCard.className = "card";

      const cardElements = document.createElement("div");
      cardElements.classList.add("card-elements");
      cardElements.innerHTML = `
      <div class="card-elements-top">
        <img class="cam-btn" src="./public/assets/cam.svg">
        <img class="fav-btn" src="./public/assets/fav.svg">
      </div>
      <div class="card-elements-bottom">
        <img class="user-btn" src="./public/assets/user.png">
      </div>
      `

      const image = document.createElement('img');
      image.src = imageData.urls.thumb;

      galleryCard.append(image, cardElements);
      galleryTrack.append(galleryCard);
    });

    page.append(galleryTrack);
  }

  getImages(query);
}

