import './header.css';

export function header() {
    const body = document.querySelector("#app");

    const header = document.createElement("header");
    header.classList.add("home-header");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");

      
    const headerLogo = document.createElement("img");
    headerLogo.src = "/assets/logo.png";
      
    const options = [
          {
            name: "Inicio",
            href: "#",
          },
          {
            name: "Explorar",
            href: "#",
          },
          {
            name: "Crear",
            href: "#",
          },
    ]
      
    const headerOptions = document.createElement("div");
    headerOptions.classList.add("options-container");
      
    for (const option of options) {
        const headerOption = document.createElement("a");
        headerOption.innerText = option.name;
        headerOptions.append(headerOption);
    }
      
    const logosContainer = document.createElement("div");
    logosContainer.classList.add("logos-container")
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
        }
    ]
      
    for (const logo of logos) {
          const logoImg = document.createElement("img");
          logoImg.src = logo.image;
          logosContainer.append(logoImg);
    }

    const inputSearch = document.createElement("input");
    inputSearch.classList.add("search-input");



    header.append(headerLogo, headerOptions, inputSearch, logosContainer)
    body.append(header);

}
