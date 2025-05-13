"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PostDetail() {
  const { id } = useParams();

  interface Post {
    title: string;
    body: string;
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <>
      <h1 className="text-3xl my-6">Post detail</h1>
      <Link href="/posts" className="text-blue-500">
        Back to posts
      </Link>
      <h2 className="text-2xl my-4">{post.title}</h2>
      <p className="text-lg">{post.body}</p>
    </>
  );
}
