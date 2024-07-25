
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

    const galleryTrack = document.createElement("div");
    galleryTrack.className = "gallery-track";

    imagesList.forEach(imageData => {
      const galleryCard = document.createElement("div");
      galleryCard.className = "card";

      const image = document.createElement('img');
      image.src = imageData.urls.thumb;

      galleryCard.append(image);
      galleryTrack.append(galleryCard);
    });

    page.append(galleryTrack);
  }

  getImages(query);
}

