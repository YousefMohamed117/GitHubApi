let input = document.querySelector(".get-repos input");
let btn = document.querySelector(".get-repos .get-button");
let showData = document.querySelector(".show-data");

btn.onclick = function () {
  getRepos();
};

function getRepos() {
  if (input.value === "") {
    showData.innerHTML = "pls write the repo name";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => res.json())
      .then((data) => {
        showData.innerHTML = "";
        data.forEach((repo) => {
          let mainDiv = document.createElement("div");
          ////////////////////////////////////////
          mainDiv.className = "repo-box";
          ////////////////////////////////////////
          let name = document.createElement("a");
          ////////////////////////////////////////
          name.href = `https://github.com/${input.value}/${repo.name}` 
          name.target = '_blank'
          ////////////////////////////////////////
          let nameTxt = document.createTextNode(repo.name);
          ////////////////////////////////////////
          let stars = document.createElement("span");
          ////////////////////////////////////////
          let starTxt = document.createTextNode(repo.stargazers_count);
          ////////////////////////////////////////
          stars.append(starTxt)
          name.append(nameTxt);
          mainDiv.append(name);
          mainDiv.append(stars);
          showData.append(mainDiv);
        });
      });
  }
}
