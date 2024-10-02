'use client';
import { useState } from 'react';
import Link from 'next/link';

const quizData = [
  {
    question: "What is Policy Bazaar?",
    options: ["A car", "An insurance comparison website", "A policy for travelers", "A type of investment"],
    correctAnswer: 1,
    explanation: "Policy Bazaar is an insurance comparison website."
  },
  {
    question: "When was Policy Bazaar founded?",
    options: ["2008", "2012", "2015", "2018"],
    correctAnswer: 0,
    explanation: "Policy Bazaar was founded in 2008."
  },
  {
    question: "Which type of insurance can you compare on Policy Bazaar?",
    options: ["Life Insurance", "Health Insurance", "Motor Insurance", "All of the above"],
    correctAnswer: 3,
    explanation: "You can compare life, health, and motor insurance on Policy Bazaar."
  },
  {
    question: "Which of the following is NOT a feature of Policy Bazaar?",
    options: ["Tax-saving advice", "Claim assistance", "Buying & comparing insurance policies", "Cryptocurrency trading"],
    correctAnswer: 3,
    explanation: "Policy Bazaar does not offer cryptocurrency trading."
  },
  {
    question: "What documents are typically required to buy insurance on Policy Bazaar?",
    options: ["Identity Proof", "Medical Reports", "Address Proof", "All of the above"],
    correctAnswer: 3,
    explanation: "Identity proof, address proof, and sometimes medical reports are required."
  },
  {
    question: "Which of the following is an advantage of buying insurance through Policy Bazaar?",
    options: ["Detailed policy comparison", "Discounts on premiums", "Easy claim process support", "All of the above"],
    correctAnswer: 3,
    explanation: "Policy Bazaar offers detailed comparisons, discounts, and claim process support."
  },
  {
    question: "What kind of customer support does Policy Bazaar offer?",
    options: ["24/7 live chat", "In-person support only", "Dedicated claim assistance", "None of the above"],
    correctAnswer: 2,
    explanation: "Policy Bazaar offers dedicated claim assistance."
  },
  {
    question: "Which regulatory body oversees the insurance sector in India?",
    options: ["RBI", "SEBI", "IRDAI", "BSE"],
    correctAnswer: 2,
    explanation: "IRDAI (Insurance Regulatory and Development Authority of India) regulates the insurance sector."
  },
  {
    question: "Which of the following can be done on the Policy Bazaar mobile app?",
    options: ["Compare policies", "Buy new policies", "Track claims", "All of the above"],
    correctAnswer: 3,
    explanation: "You can compare, buy, and track insurance policies on the Policy Bazaar mobile app."
  },
  {
    question: "Policy Bazaar primarily helps customers by:",
    options: ["Providing insurance claims", "Offering comparison of insurance policies", "Recommending specific insurance providers", "Managing government insurance schemes"],
    correctAnswer: 1,
    explanation: "Policy Bazaar helps customers compare insurance policies."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index) => {
    setUserAnswers([...userAnswers, index === quizData[currentQuestion].correctAnswer]);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getScore = () => {
    return userAnswers.filter(answer => answer).length;
  };

  return (
    <>
      <div className='h-[60px] bg-slate-900 text-white'><ul className='text-xl ml-[20px] flex gap-[12px]'><Link href='/CardHover'><li>Home</li></Link></ul>
      
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
        {!showResults ? (
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-4">
              {quizData[currentQuestion].question}
            </h1>
            <div className="space-y-2">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="block w-full bg-blue-200 text-black py-2 px-4 rounded-lg hover:bg-blue-400"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-4">Your Score: {getScore()} / {quizData.length}</h1>
            <div className="space-y-4">
              {quizData.map((question, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                  <h2 className="font-bold">{question.question}</h2>
                  <p>
                    Your answer:{" "}
                    {userAnswers[index] ? (
                      <span className="text-green-500">Correct</span>
                    ) : (
                      <span className="text-red-500">Incorrect</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600">{question.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
