"use client";
import { useEffect } from "react";
import { SectionContainer } from "./components/layout/SectionContainer";
import { H1, H2 } from "./components/ui/text";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        alert("Please rotate your device to landscape mode.");
      }
    };
    window.addEventListener("load", handleOrientation);

    const redirectInterval = setInterval(() => {
      router.push("/main");
    }, 5000); 

    return () => {
      window.removeEventListener("load", handleOrientation);
      clearInterval(redirectInterval); 
    };
  }, [router]);

  return (
    <SectionContainer className="min-w-max min-h-max bg-[url('/bg0.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <div className="relative z-10 h-screen flex justify-center items-center flex-col">
        <H1 className="text-white text-3xl font-bold text-center">
          Nama : Muhammad Hadi Putro Santoso
        </H1>
        <H1>NPM: 2386206098</H1>
        <H2>Kelas: PGSD 3/C</H2>
      </div>
    </SectionContainer>
  );
}
