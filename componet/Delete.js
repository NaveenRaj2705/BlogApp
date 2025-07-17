"use client";
import { useEffect, useState } from "react";

const Delete = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
  const handleDelete = async () => {
    if (!selectedId) {
      alert("Please select a blog to delete.");
      return;
    }
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;
    try {
      const res = await fetch(`http://localhost:5000/blogs/${selectedId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Blog deleted successfully!");
        setBlogs(blogs.filter((blog) => blog.id !== parseInt(selectedId)));
        setSelectedId("");
      } else {
        alert("Failed to delete blog.");
      }
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="form-container">
      <h2>Delete Blog</h2>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Blog to Delete</option>
        {blogs.map((blog) => (
          <option key={blog.id} value={blog.id}>{blog.id} - {blog.title} </option>
        ))}
      </select>
      <br />
      <button onClick={handleDelete} disabled={!selectedId}>
        Delete Selected Blog
      </button>
    </div>
  );
};

export default Delete;