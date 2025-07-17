"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Update = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch blogs", err));
  }, []);

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const blog = blogs.find((item) => item.id == id);
    setForm({ ...blog, tags: blog.tags.join(", ") });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBlog = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch(`http://localhost:5000/blogs/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });

      if (res.ok) {
        alert("Blog updated successfully!");
        router.push("/BlogA");
      } else {
        alert("Failed to update blog.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h2>Update Blog</h2>
      <select onChange={handleSelect} value={selectedId}>
        <option value="">Select Blog by ID</option>
        {blogs.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id} - {item.title}
          </option>
        ))}
      </select>

      {form && (
        <form onSubmit={handleSubmit}>
          {["title", "author", "image", "summary", "content"].map((field) => (
            <input key={field} type="text" name={field} placeholder={field} value={form[field]} onChange={handleChange} required />
          ))}
          <input type="text" name="tags" placeholder="Comma-separated tags" value={form.tags} onChange={handleChange} required />
          <button type="submit">Update Blog</button>
        </form>
      )}
    </div>
  );
};

export default Update;