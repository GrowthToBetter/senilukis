"use client";

import { useRouter } from "next/navigation";
import { SectionContainer } from "../components/layout/SectionContainer";
import { Button } from "../components/ui/button";
import { MateriData as Materi } from "../components/utils/materi";
import { ChevronLeft } from "lucide-react";

export default function MateriList() {
  const router = useRouter();

  return (
    <SectionContainer className="min-w-max min-h-max bg-[url('/bg2.png')] bg-center flex justify-center items-center bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <nav className="fixed flex justify-between w-full z-20 top-0 start-0 ">
            <Button
              variant={"ghost"}
              className="text-white"
              onClick={() => router.push("/play")}>
              <ChevronLeft />
            </Button>
      </nav>
      <div className="h-screen">
        <div className="bg-white absolute rounded-b-xl w-1/3 h-20 top-[-10px] right-1/3 font-bold text-center flex flex-col justify-evenly items-center text-black">
          Materi
        </div>
      </div>
      <div className="relative z-10 grid grid-rows-2 grid-cols-2 h-1/2 flex-col gap-5">
        {Materi.map((item) => (
          <Button
            key={item.id}
            variant={"outline"}
            size={"lg"}
            className="text-black font-bold"
            onClick={() => router.push(`/menu/${item.id}`)}>
            {item.judul}
          </Button>
        ))}
      </div>
    </SectionContainer>
  );
}
