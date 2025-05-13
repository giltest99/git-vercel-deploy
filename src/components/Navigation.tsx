import React from "react";
import Link from "next/link";

export default function Navigation() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "Typicode", path: "/typicode" },
  ];

  return (
    <>
      <ul className="flex gap-4 p-2">
        {links.map((link) => (
          <li key={link.name} className="">
            <Link href={link.path} className="inline-block hover:underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
