// obejct: use to group related information
// unordered collection of key-value pairs (also called "properties")
// these examples can be tested in the javascript console, using the developer tools when you inspect a webpage

var facebookUser = {userName: "jpstayfocus", password: "secretpassword", email: "jp@github.com", profileImage: "reference-image"} // obejct is defined

// access a property of an object
facebookUser.email // 'jp@github.com'
facebook.password // 'secretpassword'

// modifying a value of a property
facebookUser.password = "newpwd" // "newpwd"
facebookUser.password // 'newpwd'

// addding a new property in a object
facebookuser.about = "engineer" // 'engineer'

facebookUser
facebookUser = {userName: "jpstayfocus", password: "secretpassword", email: "jp@github.com", profileImage: "reference-image", about: "engineer"} // obejct is defined and property added

// deleting a property of an object
delete facebookUser.about // true

var facebookUser = {userName: "jpstayfocus", password: "secretpassword", email: "jp@github.com", profileImage: "reference-image"} // obejct is defined

// addding a new property in a object
facebookuser.friends = ["Mike", "Ana", "Jenny"] 

facebookUser = {userName: "jpstayfocus", password: "secretpassword", email: "jp@github.com", profileImage: "reference-image", friends: Array(3)} // obejct is defined

facebookUser.currentWork = {company: "example-company", startDate: "somedate", position:"developer"}
facebookUser

var post1 = {content: "This is super post", likes: 300, shares: 20}

var post2 = {content: "This is my bit boring post", likes: 10, shares: 0}

facebookUser.posts = [post1, post2]

facebookUser

// end

