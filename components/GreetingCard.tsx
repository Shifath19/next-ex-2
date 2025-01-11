"use client";

export default function GreetingCard({ username }: { username: string }) {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">Hello, {username}!</h2>
    </div>
  );
} 