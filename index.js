const posts = [];
const titleInputNode = document.querySelector(".js-title-input");
const buttonPostNode = document.querySelector(".js-button-post");
const textInputNode = document.querySelector(".js-text-input");
const postNode = document.querySelector(".js-posts");
const badmessage = document.getElementById("badmessage");
const badmessageText = document.getElementById("badmessageText");
const BADBESSAGE = "badmessage-hidden";

titleInputNode.addEventListener("input", function (event) {
   const titleLength = event.target.value;
   if (titleLength.length > 99) {
      badmessage.classList.remove(BADBESSAGE);
      document.querySelector(".js-button-post").disabled = true;
   } else {
      badmessage.classList.add(BADBESSAGE);
      document.querySelector(".js-button-post").disabled = false;
   }
});
textInputNode.addEventListener("input", function (event) {
   const textLength = event.target.value;
   if (textLength.length > 199) {
      badmessageText.classList.remove(BADBESSAGE);
      document.querySelector(".js-button-post").disabled = true;
   } else {
      badmessageText.classList.add(BADBESSAGE);
      document.querySelector(".js-button-post").disabled = false;
   }
});

buttonPostNode.addEventListener("click", function () {
   const postFromUser = getPostFromUser();
   addPost(postFromUser);
   renderPosts();
   titleInputNode.value = "";
   textInputNode.value = "";
});

function getPostFromUser() {
   const title = titleInputNode.value;
   const text = textInputNode.value;
   const notm = new Date().toLocaleString();
   return {
      notm: notm,
      title: title,
      text: text,
   };
}

function addPost({ title, text, notm }) {
   posts.push({
      notm: notm,
      title: title,
      text: text,
   });
}
function getPosts() {
   return posts;
}

function renderPosts() {
   const posts = getPosts();
   let postsHTML = "";
   posts.forEach((post) => {
      postsHTML += `
    <div class="post">
             <p class ="post__date">${post.notm}</p>
             <p class ="post__title">${post.title}</p>
             <p class ="post__text">${post.text}</p>
    </div>
     `;
   });

   postNode.innerHTML = postsHTML;
}
