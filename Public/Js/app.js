import { Header } from "./View/Header.js";
import { Content } from "./View/Content.js";
import { SubNav } from "./View/SubNav.js";

export const Render = () => {
    Header();
    SubNav();
    Content();
}

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
