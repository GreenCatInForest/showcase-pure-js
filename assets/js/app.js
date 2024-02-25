// Function to detect if the site is deployed on GitHub Pages

isGitHubPages = () => {
  return window.location.hostname === "greencatinforest.github.io";
};

const headerNameImgURL = isGitHubPages()
  ? "/showcase-pure-js/assets/img/universe-4609408_1920.jpg"
  : "/assets/img/universe-4609408_1920.jpg";

// Set the CSS variable with the background image URL
document.documentElement.style.setProperty(
  "--background-image",
  `url(${headerNameImgURL})`
);
