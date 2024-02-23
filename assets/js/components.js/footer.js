const footer = document.querySelector("#footer");

const createFooter = () => {
  let footerButtons = document.createElement("section");
  footerButtons.classList.add("social");
  footerButtons.innerHTML = `
  <a><img src="./assets/img/icons8-linkedin-480.png" /></a>
<a><img src="./assets/img/icons8-github-480.png" /></a>
<a><img src="/assets/img/icons8-facebook-480.png" /></a>
    `;
  footer.appendChild(footerButtons);
};
createFooter();
