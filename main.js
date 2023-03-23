const viewMoreBtn = document.querySelector(".main-showbtn");
const posts = document.querySelectorAll(".main__posts__card");
const hamburgerBtn = document.querySelector(".header__nav-hamburgericon");
const mobileNav = document.querySelector(".header__nav__links-mobile");

console.log(mobileNav);

hamburgerBtn.addEventListener(
  "click",

  function () {
    mobileNav.classList.toggle("hidden");
  }
);

viewMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  posts.forEach((post) => post.classList.remove("hidden"));

  if ([...posts].every((post) => !post.classList.contains("hidden"))) {
    viewMoreBtn.classList.add("hidden");
  }
});
