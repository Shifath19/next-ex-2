"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UserForm({ onSubmit }: { onSubmit: (username: string) => void }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="mb-6 p-2 border rounded"
        required
      />
      <Button type="submit" variant="brand" className="w-full">
        Submit
      </Button>
    </form>
  );
}