import Search from "./Form/Search";
import Header from "./View/Header";

const main = () => {
    return `
        <div class="container">
            ${Header()}
            ${Search()}
        </div>
    `
}

