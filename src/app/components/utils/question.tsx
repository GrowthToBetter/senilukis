import React, { useState } from "react";
import { Question } from "../../menu/[id]/page";

type MultipleChoiceProps = {
  questions: Question[];
  onSubmit?: (results: { id: string; isCorrect: boolean }[]) => void;
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  questions,
  onSubmit,
}) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswer = (questionId: string, choiceId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choiceId }));
  };

  const handleSubmit = () => {
    const results = questions.map((q) => ({
      id: q.id,
      isCorrect: answers[q.id] === q.correctAnswerId,
    }));
    onSubmit?.(results);
  };

  return (
    <div className="space-y-8">
      {questions.map((q) => (
        <div key={q.id} className="p-4 border border-gray-200 rounded-md">
          <h3 className="text-lg font-bold">{q.question}</h3>
          <div className="mt-4 space-y-2">
            {q.choices.map((choice) => (
              <label key={choice.id} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={choice.id}
                  checked={answers[q.id] === choice.id}
                  onChange={() => handleAnswer(q.id, choice.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>{choice.text}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
        Submit
      </button>
    </div>
  );
};

export default MultipleChoice;
