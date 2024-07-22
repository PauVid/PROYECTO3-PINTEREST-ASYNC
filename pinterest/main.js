import './style.css'
import { cards } from './src/Components/Cards/cards'

const app = document.querySelector("#app");

app.innerHTML = `
    ${cards()}
`