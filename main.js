const viewMoreBtn = document.querySelector(".main-showbtn");
const posts = document.querySelectorAll(".main__posts__card");

console.log(posts[4]);

viewMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  posts.forEach((post) => post.classList.remove("hidden"));

  if ([...posts].every((post) => !post.classList.contains("hidden"))) {
    viewMoreBtn.classList.add("hidden");
  }
});
