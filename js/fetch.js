import { footerData as footer } from "../js/footer.js"

const avatar = document.getElementById("avatar");
const fullName = document.getElementById("labelFullName")
const githubUrl = "https://api.github.com/users/igalsok";

function fetchGit(){
    fetch(githubUrl)
    .then(res =>res.json())
        .then(data =>{
            avatar.setAttribute("src", data.avatar_url);
            fullName.innerHTML = data.name;
        })
}

fetchGit();
footer();