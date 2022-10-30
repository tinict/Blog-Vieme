import { Search } from "../Components/Search.js"


export const SubNav = () => {
    return `
        <div class="SubNavbar">
            <div class="SubNavbar__left">
                ${Search()}
            </div>
            <div class="SubNavbar__right">
                <button  class="btnSubNavbar" type="button" title="Menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    `
}