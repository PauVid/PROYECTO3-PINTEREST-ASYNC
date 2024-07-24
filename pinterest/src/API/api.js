import { response } from "express"

const apiUrl = "https://api.unsplash.com/photos/random?client_id=BHMev0wXRyHqojE13-VV7OJmQFRkP1f_GxT3K3z5CA0"

fetch(apiUrl)
    .then(response => {
        if(!response.ok) {
            throw new Error("Network Response was not ok");
        }
        return response.json();
    })
    .then(userData => {
        console.log("User Data", userData);
    })
    .catch(error => {
        console.error("Error: ", error)
    })