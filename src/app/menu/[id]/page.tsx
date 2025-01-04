"use client";

import { useState } from "react";
import { SectionContainer } from "../../components/layout/SectionContainer";
import { Button } from "../../components/ui/button";
import { useParams } from "next/navigation";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Body1 } from "@/app/components/ui/text";

export const Materi = [
  {
    cover: "/bg4.png",
    judul: "Apa Itu Seni Lukis ?",
    id: 1,
    isi: '"Seni lukis adalah cabang seni rupa yang menggunakan medium dua dimensi untuk menciptakan karya. Lukisan dapat menjadi alat untuk menyampaikan perasaan, ide, atau keindahan."',
  },
  {
    cover: "/bg5.png",
    judul: "Teknik Melukis",
    id: 4,
    child: [
      {
        judul: "Teknik Aquarel",
        isi: "“Teknik melukis menggunakan cat air dengan sapuan warna yang tipis dan transparan sehingga hasilnya tembus pandang”",
      },
      {
        judul: "Teknik plakat",
        isi: "“Teknik melukis menggunakan cat akrilik, cat air, dan cat minyak dengan sapuan warna yang tebal atau kental sehingga hasilnya tampak gelap atau menutupi”",
      },
      {
        judul: "Teknik tempera",
        isi: "“Teknik melukis dengan mencampur kuning telur dalam cat sebagai bahan perekat. Teknik ini biasanya diterapkan pada media kanvas, kayu, dan tembok”",
      },
      {
        judul: "Teknik pointilis",
        isi: "“Teknik melukis yang menerapkan titik-titik berbeda dalam suatu pola untuk membentuk suatu gambar”",
      },
      {
        judul: "Teknik goresan ekspresif",
        isi: "“Teknik melukis yang terkesan bebas karena pembuatannya bisa menggunakan alat berupa jari, tangan, kuas, ataupun objek lain”",
      },
      {
        judul: "Teknik mozaik",
        isi: "“Teknik melukis yang menggunakan material atau bahan dari kepingan-kepingan yang sengaja dibuat dengan cara dipotong-potong”",
      },
      {
        judul: "Teknik batik",
        isi: "“Teknik melukis yang hampir sama dengan tata cara membatik, yaitu dengan menutupi permukaan kain dengan lilin atau malam batik”",
      },
      {
        judul: "Teknik mural",
        isi: "“Teknik melukis di tembok yang seringkali digunakan sebagai penghias eksterior”",
      },
    ],
  },
  {
    cover: "/bg6.png",
    judul: "Genre Dalam Melukis",
    id: 2,
    isi: '"Seni lukis memiliki berbagai genre, seperti potret, pemandangan, still life, dan abstrak. Setiap genre memberikan pengalaman visual yang berbeda."',
  },
  {
    cover: "/bg6.png",
    id: 3,
    judul: "pelukis Terkenal",
  },
];

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
      className="relative bg-center bg-cover bg-no-repeat"
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
      <div className=" z-10 p-8 text-white">
        <div className="bg-white absolute rounded-b-xl w-1/3 h-20 top-[-10px] right-1/3 font-bold text-center flex flex-col justify-evenly items-center text-black">
          {item.judul}
        </div>
        {item.child ? (
          <div>
            {item.child
              .slice(
                currentPage * itemsPerPage,
                currentPage * itemsPerPage + itemsPerPage
              )
              .map((child, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-semibold">{child.judul}</h2>
                  <Body1 className="text-white text-center w-2/3 mt-3 font-light text-wrap text-sm">{child.isi}</Body1>
                </div>
              ))}
          </div>
        ) : (
          <Body1 className="text-white text-center w-2/3 mt-3 font-light text-wrap text-sm">{item.isi}</Body1>
        )}
      </div>
    </SectionContainer>
  );
}
