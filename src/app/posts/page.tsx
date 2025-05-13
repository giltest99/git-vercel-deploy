"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1 className="text-3xl my-6">Typicode client</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="rounded shadow w-full min-h-24 bg-white">
            <Link
              href={`/posts/${post.id}`}
              className="inline-block w-full h-full p-4 text-left rounded hover:bg-gray-100"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
