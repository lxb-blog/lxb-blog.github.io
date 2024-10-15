var posts=["2024/10/13/GitHub+hexo/","2024/10/13/hexo/","2024/10/13/hexo文章发布模板/","2024/10/13/hexo之安装主题/","2024/10/13/hexo美化之一图流/","2024/10/13/hexo美化之信封留言板/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };