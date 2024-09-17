import { useState } from "react";

function Question({ question, onAnswer, currentAnswer }) {
  const [answer, setAnswer] = useState(currentAnswer || '');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    onAnswer(question.id, answer);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-6">{question.text}</h3>
      {question.type === 'rating' && (
        <div className="flex flex-wrap gap-2 mb-6">
          {[...Array(question.scale)].map((_, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                name={question.id}
                value={index + 1}
                checked={answer === String(index + 1)}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-lg">{index + 1}</span>
            </label>
          ))}
        </div>
      )}
      {question.type === 'text' && (
        <textarea
          value={answer}
          onChange={handleChange}
          className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none mb-6"
          placeholder="Your answer..."
        />
      )}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-purple-600 font-serif text-white font-semibold hover:bg-purple-500 transition"
      >
        Submit Answer
      </button>
    </div>
  );
}

export default Question;
