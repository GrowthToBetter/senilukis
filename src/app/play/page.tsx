"use client";
import { SectionContainer } from "../components/layout/SectionContainer";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <SectionContainer className="min-w-max min-h-max bg-[url('/bg2.png')] bg-center flex justify-center items-center bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <div className="relative z-10 h-screen flex justify-center items-center flex-col">
        <Button
          variant={"outline"}
          size={"lg"}
          className="mt-5 text-black font-bold"
          onClick={() => router.push("/menu")}>
          Materi
        </Button>
        <Button
          variant={"outline"}
          size={"lg"}
          className="mt-5 text-black font-bold"
          onClick={() => router.push("/game")}
          >
          Game
        </Button>
      </div>
    </SectionContainer>
  );
}
