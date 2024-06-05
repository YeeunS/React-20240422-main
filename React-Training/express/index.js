const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// global middleware
function middleware1(req, res, next) {
  console.log("this is middleware 1");
  next();
}

function middleware2(req, res, next) {
  console.log("this is middleware 2");
  next();
}

// middleware, it will be applied globally

app.use((req, res, next) => {
  console.log(req.method, "-", req.url);
  next();
});

// middleware to apply specific endpoint

app.use("/hello", (req, res, next) => {
  console.log;
  log("hello middleware");
  next();
});

app.get("/", middleware1, middleware2, (req, res) => {
  res.json({ mesage: "hello world" });
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

/*
 *
 * posts
 * GET, POST, DELETE
 */

const posts = [
  {
    id: 1,
    content: "first post",
  },
];

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const newPost = { ...req.body };
  posts.push(newPost);
  res.send(newPost);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postId = parseInt(id);
  const index = posts.find((post) => {
    return post.id === postId;
  });
  if (!index) {
    res.status(400), send({ message: "Post does not exist" });
    return;
  }
  if (index) {
    posts.splice(index, 1);
    res.send({ message: "Success" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jwt - json web token
// session id

// session id
// client -> server (request)
// server will store user info on the server side
//        <- session id
// client -> server with session id
// server will verify user info with using the sesison id, by doing a lookup on the database
//        <- response

// jwt
// client -> server (request)
// server will create jwt for user, jwt will contain user info
//        <- jwt
// client -> server with jwt
// server will decrypt jwt to get user info, use the info to verify the user (still happening in the server side)
//        <- response
