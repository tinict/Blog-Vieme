//Thanh navbar

export const Header = () => {
    return `
        <section class="navbar">
                <div class="navbar__left">
                    <a href="#" class="navbar_left_icon">
                        <i class="fa-solid fa-bars"></i>
                    </a>
                    <a href="#" class="navbar_left_icon">
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>
                <div class="navbar__center">
                    <h1 class="navbar__center__title">ViemeBlog</h1>
                </div>
                <div class="navbar__right">
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <div class="navbar__right__avatar">
                        <img src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png" alt="">
                        <button class="navbar__dropdown__user" type="button" title="Menu">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
        </section> 
    `
}
