import { useEffect, useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 'q1',
    text: 'How satisfied are you with our products?',
    type: 'rating',
    scale: 5
  },
  {
    id: 'q2',
    text: 'How fair are the prices compared to similar retailers?',
    type: 'rating',
    scale: 5
  },
  {
    id: 'q3',
    text: 'How satisfied are you with the value for money of your purchase?',
    type: 'rating',
    scale: 5
  },
  {
    id: 'q4',
    text: 'On a scale of 1-10 how would you recommend us to your friends and family?',
    type: 'rating',
    scale: 10
  },
  {
    id: 'q5',
    text: 'What could we do to improve our service?',
    type: 'text'
  }
];

function Questionnaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const storedResponses = JSON.parse(localStorage.getItem('responses')) || {};
    setResponses(storedResponses);
  }, []);

  const handleAnswer = (id, answer) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [id]: answer
    }));
    localStorage.setItem('responses', JSON.stringify({
      ...responses,
      [id]: answer
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">
        Question {currentIndex + 1} of {questions.length}
      </h2>
      <Question
        question={currentQuestion}
        onAnswer={handleAnswer}
        currentAnswer={responses[currentQuestion.id]}
      />
      <div className="mt-6 flex space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`px-4 py-2 border  ${currentIndex === 0 ? 'bg-gray-300 cursor-not-allowed font-semibold font-serif' : 'bg-blue-500 text-white hover:bg-blue-600'} transition`}
        >
          Previous
        </button>
        <button
          onClick={handleSkip}
          className="px-4 py-2 bg-black font-serif text-white font-semibold transition"
        >
          Skip
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className={`px-4 py-2 border font-serif  ${currentIndex === questions.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-500'} transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Questionnaire;
