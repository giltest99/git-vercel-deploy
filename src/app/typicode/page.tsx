import React from "react";
/* import Link from "next/link"; */

export default async function page() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsData = await posts.json();
  return (
    <>
      <h1 className="text-3xl my-6">Liste des posts</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
        {postsData.map((post: { id: number; title: string }) => (
          <li key={post.id} className="rounded shadow w-full p-4 bg-white">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}
