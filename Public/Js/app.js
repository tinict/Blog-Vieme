import { Header } from "./View/Header.js";
import { Content } from "./View/Content.js";
import { SubNav } from "./View/SubNav.js";
import { FooterMobile } from "./View/Footer.js";

export const Render = () => {
    Header();
    SubNav();
    Content();
}

const main = () => {
    return `
        <div class="container">
            <header class="header">
                ${Header()}
                ${SubNav()}
            </header>
            ${Content()}
            ${FooterMobile()}
        </div>
    `
}

const rootElement = document.getElementById('root');
rootElement.innerHTML = main();
