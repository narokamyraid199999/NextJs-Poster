const getPosts = async (skio = 0, limit = 10) => {
  const postRes = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skio}`
  );
  const postData = await postRes.json();
  return postData?.posts || [];
};

export { getPosts };
