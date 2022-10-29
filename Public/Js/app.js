import {Header} from "./View/Header.js";
import { Content } from "./View/Content.js";
import { SubNav } from "./View/Navbar.js";

const main = () => {
    return `
        <div class="container">
            ${Header()}
            ${SubNav()}
            ${Content()}
        </div>
    `
}

const rootElement = document.getElementById('root');
rootElement.innerHTML = main();
