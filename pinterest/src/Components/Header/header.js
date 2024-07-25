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
        headerLogo.src = "/assets/logo.png";

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

        // const hamburgerLogo = [
        //   { 
        //     image: "/assets/menu.svg", 
        //     name: "menu" 
        //   },
        // ];
        
        const hamburger = document.createElement("img");
        hamburger.src = "/assets/menu.svg";
        hamburger.classList.add("menu-hamburger");
        hamburger.addEventListener("click", () => {
          console.log("clicado")
          const menuShow = document.querySelector(".menu-container");
          menuShow.classList.add("visible");
          menuShow.classList.remove("hidden");
          if(menuShow.classList.contains("visible")) {
            menuShow.classList.add("hidden");
            menuShow.classList.remove("visible");
          }
        })

        const menu = document.createElement("div");
        menu.classList.add("menu-container", "hidden");
        menu.innerHTML = `
        <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        </ul>
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
