"use client";
import { useEffect, useState } from "react";
import { SectionContainer } from "./components/layout/SectionContainer";
import { Button } from "./components/ui/button";
import { Body1, H1 } from "./components/ui/text";
import { useRouter } from "next/navigation";

export default function Home() {
  const router= useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  return (
    <SectionContainer className="min-w-max min-h-max bg-[url('/bg1.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <div className="relative z-10 h-screen flex justify-center items-center flex-col">
        <H1 className="text-white text-3xl font-bold text-center">
          Seni Lukis: Karya dan Ekspresi
        </H1>
        <Body1 className="text-white text-center w-2/3 mt-3 font-light text-wrap text-sm">{'"Selamat datang di dunia seni lukis! Mari kita pelajari keindahan seni lukis dan bagaimana seni ini menjadi medium ekspresi."'}</Body1>
        <Button variant={"outline"} className="mt-5 text-black font-bold" onClick={() => router.push("/play")}>Play</Button>
      </div>
    </SectionContainer>
  );
}
