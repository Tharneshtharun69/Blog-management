const postButton = document.getElementById("post-button");
const postContent = document.getElementById("post-content");
const postsList = document.getElementById("posts-list");

postButton.addEventListener("click", () => {
  if (postContent.value.trim() !== "") {
    const post = document.createElement("div");
    post.className = "post";
    post.textContent = postContent.value;
    postsList.appendChild(post);
    postContent.value = "";
  }
});
