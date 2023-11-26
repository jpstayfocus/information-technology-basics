<script>
  // recap of the code
  /*
    1- list of posts with likes 
    2- for each post we are adding reactions and deleting likes attribute
    3- printing out the new posts array
    */
  var post1 = {
    content: "This is super post",
    likes: 300,
    shares: 20,
  };

  var post2 = {
    content: "This is my bit boring post",
    likes: 10,
    shares: 0,
  };

  var facebookUser = {
    userName: "jpstayfocus",
    password: "secretpassword",
    email: "jp@github.com",
    profileImage: "reference-image",
    friends: ["Mike", "Anna", "Jenny"],
    posts: [post1, post2],
  };

  var posts = [post1, post2];
  // give the whole posts objects
  for (post of facebookUser.posts) {
    post.reactions = post.likes;
    delete post.likes;
  }

  console.log("we are done with loop");
  console.log(facebookUser.posts);

  /*
  var posts = [post1, post2];
  // give the whole posts objects
  for (post of posts) {
    // give the whole posts objects
    // do something
    console.log("number of likes on a post " + post.likes);
    post.reactions = post.likes; // value of post.likes will be assigned to post.reactions.
    console.log("number of likes of reactions on a post is " + post.reactions);
  }

  console.log("we are done with loop");
  console.log(posts);
*/

  /*
  
  var posts = [post1, post2, { content: "only content" }];
  // give the whole posts objects
  for (post of posts) {
    // give the whole posts objects
    // do something
    console.log(post);
  }
*/

  /*
 
  var posts = [post1, post2, { content: "only content" }];
  for (index in posts) {
    // do something
    console.log(posts[index]);
  }

  */
</script>

<body></body>

