// get posts
const getPosts = async (skio = 0, limit = 10) => {
  const postRes = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skio}`
  );
  const postData = await postRes.json();
  return postData?.posts || [];
};

// create post
const createPost = async (postData) => {
  const postRes = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: postData?.title,
      body: postData?.body,
      userId: 1,
    }),
  });
  const postResJson = await postRes.json();

  return postResJson?.id
    ? { success: true, id: postResJson.id }
    : { success: false };
};

// update post
const updatePost = async (postData) => {
  const postRes = await fetch(`https://dummyjson.com/posts/${postData.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  const postResJson = await postRes.json();
  return postResJson?.id
    ? { success: true, id: postResJson.id }
    : { success: false };
};

// delete post
const deletePost = async (postId) => {
  const postRes = await fetch(`https://dummyjson.com/posts/${postId}`, {
    method: "DELETE",
  });
  const postResJson = await postRes.json();
  return postResJson?.id
    ? { success: true, id: postResJson.id }
    : { success: false };
};

export { getPosts, createPost, updatePost, deletePost };
