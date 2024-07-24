import "header.css"

function header() {
    const body = document.querySelector("#app");

    const header = document.createElement("header");
    header.classList.add("home-header");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");

    

    body.append(header);

}
