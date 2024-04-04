async function fetchUserPosts() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  console.log(userId);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const usersPosts = await response.json();
  console.log(usersPosts);
  console.log(usersPosts[2].body);
  try {
    usersPosts.forEach((post) => {
      createPosts(post);
    });
  } catch (error) {
    alert("bir sorun olustu:", error);
  }
}

fetchUserPosts();

//Create Posts
function createPosts(post) {
  let postsContainer = document.getElementById("posts-container");
  let postDiv = document.createElement("div");
  postDiv.classList.add("col-lg-8");
  postDiv.innerHTML = `
        <div class="card user-post">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
    `;
  postsContainer.appendChild(postDiv);
}

// User Input
function inputUserId() {
  let userPrompt = Number(prompt("Please enter a number between 1 and 10"));
  if (userPrompt < 1 || userPrompt > 10) {
    alert("Please enter a number between 1 and 10");
    inputUserId();
  } else {
    window.location.href = `posts.html?userId=${userPrompt}`;
  }
}

