import "./cards.css"

export const cards = (image, texto) => {
  return `
  <div class="card-container">
    <div class="card-background">
        <img href="#" src="${image}">
    </div>
    <div class="card-content">
        <img href="#" src="#">
        <h4>${texto}</h4>
        <a></a>
    </div>
  </div>
  
  `;
};


