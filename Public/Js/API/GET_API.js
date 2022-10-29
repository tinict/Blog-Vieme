
const API_GitHub_Repos = 'https://api.github.com/users/tinict/repos';

const Response = [];

fetch (API_GitHub_Repos)
    .then(
        (response) => {
          return response.json();
        }
    )
    .then(
        (response) => {
            response.forEach(i => {
                Response.push(i);
            });
        }
    )

console.log(Response)