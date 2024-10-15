var posts=["posts/93c315da/","posts/21600/","posts/51ff7f31/","posts/dbdf5b2f/","posts/93c315da/","posts/5a3686e8/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };