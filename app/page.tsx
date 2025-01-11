"use client";

import { useState } from "react";
import UserForm from "@/components/UserForm";
import GreetingCard from "@/components/GreetingCard";
import Image from "next/image";
import robot from "@/public/images/robot.png";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";

export default function Home() {
  const [username, setUsername] = useState("");

  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}>
              01
            </span>
            <p className="pb-6 font-medium">
              Think of Kaminari as that friend who shows up with snacks and already picked the movie...
            </p>

            <UserForm onSubmit={setUsername} />

            {username && <GreetingCard username={username} />}

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a href="https://github.com/lucky-chap/kaminari" target="_blank" rel="noreferrer" className="pb-1 text-zinc-100 dark:text-zinc-800">
                  Repo
                </a>
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="hidden h-screen w-full flex-col items-center justify-center bg-[#d6ebe9] p-9 lg:flex">
        <Image src={robot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
