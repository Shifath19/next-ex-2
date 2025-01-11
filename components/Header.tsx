"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-2xl font-bold">Kaminari</h1>
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/page-2" className="mr-4">Page 2</Link>
        <Link href="/page-3">Page 3</Link>
      </nav>
    </header>
  );
} 