"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    tags: "",
    image: "",
    summary: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      if (res.ok) {
        alert("Blog created successfully!");
        router.push("/BlogA");
      } else {
        alert("Failed to create blog.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        {["title", "author", "image", "summary", "content"].map((field) => (
          <input key={field} type="text" name={field} placeholder={field} value={form[field]} onChange={handleChange} required />
        ))}
        <input type="text" name="tags" placeholder="Comma-separated tags" value={form.tags} onChange={handleChange} required />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default Create;
