import { PostBlog } from "../Components/BoxBlog.js";

export const Contet_Left = () => {
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

export const Contet_Right = () => {
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


export const Content = () => {
    return `
        <section class="content">
            ${Contet_Left()}
            ${Contet_Right()}
        </section>
    `
};
