const connection = require("../services/database.js");

// constructor
const Post = function(post) {
  this.title = post.title;
  this.content = post.content;
  this.created_at = post.created_at;
};

Post.create = (newPost, result) => {
  connection.query("INSERT INTO posts SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};

Post.findById = (id, result) => {
  connection.query(`SELECT * FROM posts WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found post: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Post with the id
    result({ kind: "not_found" }, null);
  });
};

Post.getAll = (title, result) => {
  let query = "SELECT * FROM posts";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  connection.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Post.getAllPublished = result => {
  connection.query("SELECT * FROM posts WHERE created_at=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Post.updateById = (id, post, result) => {
  connection.query(
    "UPDATE posts SET title = ?, content = ?, created_at = ? WHERE id = ?",
    [post.title, post.content, post.created_at, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Post with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated post: ", { id: id, ...post });
      result(null, { id: id, ...post });
    }
  );
};

Post.remove = (id, result) => {
  connection.query("DELETE FROM posts WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Post with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted post with id: ", id);
    result(null, res);
  });
};

Post.removeAll = result => {
  connection.query("DELETE FROM posts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} posts`);
    result(null, res);
  });
};

module.exports = Post;