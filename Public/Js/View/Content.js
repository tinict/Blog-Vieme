export const Contet_Left = () => {
    return `
        <div class="content__left">
            <div class="container">
                <div class="box">
                    <div class="box__header">
                        <div class="box__left">
                            <div class="avatar">
                                <img src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png" alt="">
                            </div>
                            <span class="nameUser">
                                Character
                            </span>
                        </div>
                        <div class="box__right">
                            <i class="fa-regular fa-bookmark"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <a href="#" class="box__title"">
                        <h1 class="box__title__name">Trải nghiệm thử Blog Vieme</h1>
                    </a>
                    <p class="box__discription">
                        Xin chào tất cả anh đã đến với Vieme Blog ...
                    </p>
                    <div class="box__tagname">
                        <a class="box__tagname__btn" href="#">Project</a>
                    </div>
                </div>
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