import { PostBlog } from "../Components/BoxBlog.js";
import { Error404 } from "../Template/Error404.js";

export const Content_Left = () => {
    return `
        <div class="content__left">
            <nav class="Content__header">
                <span class="HomePage">
                    <i class="fa-solid fa-house"></i>
                    <a href="#">Home</a>
                </span>
                <ul class="breadcrumb">
                    
                </ul>
            </nav>
            <div class="container">
                ${PostBlog()}
            </div>
        </div>
    `
};

export const Content_Right = () => {
    return `
        <div class="content__right">
            <div class="content__right__project">
                <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
                <div class="container">
                    <div class="box__tagname">
                        <a class="box__tagname__btn" href="#">Project</a>
                    </div>
                    <div class="box__tagname">
                        <a class="box__tagname__btn" href="#">Project</a>
                    </div>
                </div>
            </div>
        </div>
    `
};

export const Content_Blog = () => {
    return `
        <div class="content__blog">
            ${Error404()}
        </div>
    `
}


export const Content = () => {
    return `
        <section class="content">
            ${Content_Left()}
            ${Content_Right()}
            ${Content_Blog()}
        </section>
    `
};

const RenderTest = (str) => {
    return `
        <section class="content">
            ${str}
        </section>
    `
}

export const setDisplayContent = (set) => {
    if (set == 0) {
        const ElementContentLeft = document.querySelector('.content__left');
        const ElementContentRight = document.querySelector('.content__right');
        const ElementContentBlog = document.querySelector('.content__blog');
        const ElementContent = document.querySelector('.content');
        const ElementSubNavBar = document.querySelector('.SubNavbar');
        const ElementNavLeft = document.querySelector('.navbar__left');
        const ElementNavbarRightAvatar = document.querySelector('.navbar__right__avatar');
        ElementNavbarRightAvatar.style.display = 'none';
        ElementNavLeft.style.display = 'block';
        ElementSubNavBar.style.display = 'none';
        ElementContentLeft.style.display = 'none';
        ElementContentRight.style.display = 'none';
        ElementContentBlog.style.display = 'block';
        ElementContent.classList.add('error404');
    }
}
