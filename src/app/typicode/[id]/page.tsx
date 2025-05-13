import React from "react";
import Link from "next/link";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await postData.json();
  if (post && post.id !== Number(id)) {
    return (
      <div className="">
        <Link
          href="/typicode"
          className="text-blue-500 underline my-8 inline-block"
        >
          Retour à la liste
        </Link>
        <p>Pas de post à afficher</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-3xl my-6">Post introuvable</h1>
        <Link
          href="/typicode"
          className="text-blue-500 underline my-8 inline-block"
        >
          Retour à la liste
        </Link>
        <p>Pas de post à afficher</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl my-6">Détail du post</h1>
      <Link
        href="/typicode"
        className="text-blue-500 underline my-8 inline-block"
      >
        Retour à la liste
      </Link>
      <h2 className="text-2xl mb-4">{post.title}</h2>
      <p className="text-lg">{post.body}</p>
    </>
  );
}
