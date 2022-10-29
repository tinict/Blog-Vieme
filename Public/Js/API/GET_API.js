import { Blog } from "./ClassBlog.js";

const API_GitHub_Repos = 'https://api.github.com/users/tinict/repos';

export var Post = [];

fetch (API_GitHub_Repos)
    .then(
        (response) => {
          return response.json();
        }
    )
    .then(
        (response) => {
            response.forEach(i => {
               var setPost = new Blog(i.id, 'Tin.ict', i.name, i.description, i.html_url);
            //console.log(i);
               Post.push(setPost);
            });
        }
    )
Post.forEach((i) => {
    console.log('Thanh cong')
});