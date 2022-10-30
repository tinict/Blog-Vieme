import { DisplayBlog̣, Message } from "../Dev/showBlog.js";
const API_GitHub_Repos = 'https://api.github.com/users/tinict/repos';

export const PostBlog = () => {
    fetch (API_GitHub_Repos)
    .then (
        (response) => {
          return response.json();
        }
    )
    .then (
        (response) => {
            var htmls = response.map((i) => {
                return `
                    <div class="box">
                        <div class="box__header">
                            <div class="box__left">
                                <div class="avatar">
                                    <img src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png" alt="">
                                </div>
                                <span class="nameUser">
                                    ${'Tin.ict'}
                                </span>
                            </div>
                            <div class="box__right">
                                <i class="fa-regular fa-bookmark"></i>
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <a href="#" class="box__title"">
                            <h1 class="box__title__name">${i.name}</h1>
                        </a>
                        <p class="box__discription">
                            ${i.description}
                        </p>
                        <div class="box__tagname">
                            <a class="box__tagname__btn" href="#">Project</a>
                        </div>
                    </div>
                `
            });
            var html = htmls.join('');
            document.querySelector('.content__left .container').innerHTML = html;
            Message('fa-ellipsis');
            Message('fa-bookmark');
            DisplayBlog̣('box__title');
        }
    )
}
