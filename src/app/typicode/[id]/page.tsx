import React from "react";
import Link from "next/link";

// Next.js génère automatiquement un type pour les paramètres dynamiques
// Vous pouvez l'importer comme suit :
type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await postData.json();

  if (!post || post.id !== Number(id)) {
    return (
      <div className="text-center">
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
