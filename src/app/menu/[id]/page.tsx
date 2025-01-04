"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Body1 } from "@/app/components/ui/text";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/button";
import { MateriData as Materi } from "../../components/utils/materi";

export type Question = {
  id: string;
  question: string;
  choices: { id: string; text: string }[];
  correctAnswerId: string;
};

export default function MateriDetail() {
  const [currentPage, setCurrentPage] = useState(0);
  const { id } = useParams();
  const item = Materi.find((item) => `${item.id}` === id);
  const router = useRouter();

  if (!item) return <p>Materi tidak ditemukan</p>;

  const itemsPerPage = 2;
  const childPages = item.child
    ? Math.ceil(item.child.length / itemsPerPage)
    : 0;

  return (
    <SectionContainer
      className="relative bg-center bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${item.cover})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <nav className="fixed flex justify-between w-full z-20 top-0 start-0 ">
        <Button
          variant={"destructive"}
          className="m-5"
          onClick={() => {
            router.push("/menu");
          }}>
          <House />
        </Button>
        {item.child ? (
          <div className="flex justify-between mt-4 mr-5">
            <Button
              disabled={currentPage === 0}
              variant={"ghost"}
              className="text-white"
              onClick={() => setCurrentPage((prev) => prev - 1)}>
              <ChevronLeft />
            </Button>
            <Button
              disabled={currentPage === childPages - 1}
              variant={"ghost"}
              className="text-white"
              onClick={() => setCurrentPage((prev) => prev + 1)}>
              <ChevronRight />
            </Button>
          </div>
        ) : (
          <></>
        )}
      </nav>
      <div className="bg-white absolute rounded-b-xl w-1/3 h-20 top-[-10px] right-1/3 font-bold text-center flex flex-col justify-evenly items-center text-black">
        {item.judul}
      </div>
      <div className=" z-10 p-8 flex justify-center items-center text-white">
        {item.child ? (
          <div className="grid grid-cols-2 gap-10">
            {item.child
              .slice(
                currentPage * itemsPerPage,
                currentPage * itemsPerPage + itemsPerPage
              )
              .map((child, index) => (
                <div key={index} className="mb-6 w-full grid grid-rows-2">
                  <h2 className="text-2xl font-semibold text-center border-b border-white">{child.judul}</h2>
                  <Body1 className="text-white text-center mt-3 font-light text-wrap text-sm">
                    {child.isi}
                  </Body1>
                </div>
              ))}
          </div>
        ) : (
          <Body1 className="text-white text-center w-2/3 mt-3 font-light text-wrap text-sm">
            {item.isi}
          </Body1>
        )}
      </div>
    </SectionContainer>
  );
}
