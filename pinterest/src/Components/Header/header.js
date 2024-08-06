import './header.css';
import { cards } from '../Cards/cards.js'; 


export function header() {
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.querySelector("#app");

        const header = document.createElement("header");
        header.classList.add("home-header");

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");

        const headerLogo = document.createElement("img");
        headerLogo.classList.add("home")
        headerLogo.src = "/assets/logo.png";
        
        headerLogo.addEventListener("click", () => {
          location.reload();
        })


        const options = [
            { name: "Inicio", href: "#" },
            { name: "Explorar", href: "#" },
            { name: "Crear", href: "#" },
        ];

        const headerOptions = document.createElement("div");
        headerOptions.classList.add("options-container");

        for (const option of options) {
            const headerOption = document.createElement("a");
            headerOption.innerText = option.name;
            headerOptions.append(headerOption);
        }

        const logosContainer = document.createElement("div");
        logosContainer.classList.add("logos-container");

        const logos = [
            { 
              image: "/assets/bubble.svg", 
              name: "bubble" 
            },
            { 
              image: "/assets/notification.svg", 
              name: "notification" 
            },
            { 
              image: "/assets/user.svg", 
              name: "user" 
            },

        ];

        for (const logo of logos) {
            const logoImg = document.createElement("img");
            logoImg.src = logo.image;
            logosContainer.append(logoImg);
        }

        const hamburger = document.createElement("img");
        hamburger.src = "/assets/menu.svg";
        hamburger.classList.add("menu-hamburger");
        hamburger.addEventListener("click", () => {
          const menuShow = document.querySelector(".menu-container");
          menuShow.classList.toggle("hidden");
          hamburger.classList.toggle("menu-hamburger-open");
          
          if(hamburger.classList.contains("menu-hamburger-open")){
            hamburger.src = "/assets/close.svg";
          } else {
            hamburger.src = "/assets/menu.svg";
          }
        })

        const menu = document.createElement("div");
        menu.classList.add("menu-container", "hidden");
        menu.innerHTML = `
        <div class="inner-menu">
          <a src="#">Explorar</a>
          <a src="#">Crear</a>
          <a src="#">Inicio</a>
          <a src="#">Mi cuenta</a>
          <a src="#">Favoritos</a>
        </div>
        `;

        const searchContainer = document.createElement("div");
        searchContainer.classList.add("search-container");

        const inputSearch = document.createElement("input");
        inputSearch.classList.add("search-input");

        const searchBtn = document.createElement('button');
        searchBtn.innerText = 'Buscar';
        searchBtn.addEventListener('click', () => {
            const query = inputSearch.value;
            console.log('Searching for:', query);

            cards(query);
        });

        searchContainer.append(inputSearch, searchBtn);
        header.append(headerLogo, headerOptions, searchContainer, logosContainer, hamburger);
        body.append(header, menu);

        let galleryContainer = document.querySelector('.gallery');
        if (!galleryContainer) {
            galleryContainer = document.createElement('div');
            galleryContainer.classList.add('gallery');
            body.append(galleryContainer);
        }
    });
}
