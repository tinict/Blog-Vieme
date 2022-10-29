import { Search } from "../Components/Search.js"


export const SubNav = () => {
    return `
        <div class="Navbar">
            <div class="Navbar__left">
                ${Search()}
            </div>
            <div class="Navbar__right">
                <button  class="btnNavbar" type="button" title="btnNavbar">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    `
}