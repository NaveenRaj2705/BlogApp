const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const DB_PATH = "./blog.json";

app.use(cors());
app.use(bodyParser.json());

app.get("/blogs", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  res.json(data);
});

app.get("/blogs/:id", (req, res) => {
  const blogs = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const blog = blogs.find(b => b.id == req.params.id);
  blog ? res.json(blog) : res.status(404).json({ error: "Not found" });
});

app.post("/blogs", (req, res) => {
  const blogs = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const newBlog = { ...req.body, id: Date.now() };
  blogs.push(newBlog);
  fs.writeFileSync(DB_PATH, JSON.stringify(blogs, null, 2));
  res.status(201).json(newBlog);
});

app.put("/blogs/:id", (req, res) => {
  let blogs = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const blogIndex = blogs.findIndex(b => b.id == req.params.id);
  if (blogIndex === -1) return res.status(404).json({ error: "Not found" });

  blogs[blogIndex] = { ...blogs[blogIndex], ...req.body };
  fs.writeFileSync(DB_PATH, JSON.stringify(blogs, null, 2));
  res.json(blogs[blogIndex]);
});

app.delete("/blogs/:id", (req, res) => {
  let blogs = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const filtered = blogs.filter(b => b.id != req.params.id);
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2));
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
