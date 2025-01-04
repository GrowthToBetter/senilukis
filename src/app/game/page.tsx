"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { House } from "lucide-react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/button";
import { Question as QuestionList } from "@/app/components/utils/materi"; // Importing Question array
import { H1 } from "../components/ui/text";

export default function QuestionDetail() {
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const [score, setScore] = useState(0); // Track score
  const [gameFinished, setGameFinished] = useState(false); // Track if game is finished
  const router = useRouter();

  const question = QuestionList[currentPage]; // Get the question based on currentPage
  const totalPages = QuestionList.length; // Total number of questions

  const handleChoiceSelection = (choiceId: string) => {
    if (choiceId === question.correctAnswerId) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setGameFinished(true); // Set game to finished when the last question is reached
    }
  };

  const handleGoHome = () => {
    router.push("/main"); // Navigate to home after game finish
  };

  return (
    <SectionContainer
      className="relative bg-center bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url('/bg7.png')` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />

      <nav className="fixed flex justify-between w-full z-20 top-0 start-0">
        <Button
          variant={"destructive"}
          className="m-5"
          onClick={() => {
            router.push("/menu");
          }}>
          <House />
        </Button>
        <div className="flex justify-between mt-4 mr-5">
          <Button
            disabled={currentPage === 0}
            variant={"ghost"}
            className="text-white"
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            <ChevronLeft />
          </Button>
          <Button
            disabled={currentPage === totalPages - 1}
            variant={"ghost"}
            className="text-white"
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            <ChevronRight />
          </Button>
        </div>
      </nav>

      {!gameFinished ? (
        <>
          <div className="bg-white absolute rounded-b-xl w-1/3 h-20 top-[-10px] right-1/3 font-bold text-center flex flex-col justify-evenly items-center text-black">
            Question {currentPage + 1} of {totalPages} | Score: {score}
          </div>

          <div className="z-10 p-8 flex justify-center items-center text-white">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                {question.question}
              </h2>
              <div className="flex justify-center items-center w-full h-screen">
                {question.img && (
                  <Image
                    src={question.img}
                    alt="question image"
                    width={250}
                    height={500}
                    className="m-6 object-cover w-2/4 h-2/3 rounded-md"
                  />
                )}
                <div className="flex flex-col gap-4">
                  {question.choices.map((choice) => (
                    <Button
                      key={choice.id}
                      variant={"outline"}
                      size={"lg"}
                      className="text-black font-bold"
                      onClick={() => handleChoiceSelection(choice.id)}>
                      {choice.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
          <div className="bg-white rounded-lg p-8 text-center">
            <H1 className="text-3xl font-bold text-black">Game Finished</H1>
            <H1 className="text-xl text-black">
              Your Score: {(score / 5) * 100}
            </H1>
            <div className="mt-4">
              <Button onClick={handleGoHome} className="text-white" variant={"outline"}>
                Home
              </Button>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
