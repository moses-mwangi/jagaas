import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, stepSet] = useState(1);
  const [isOpen, setIsopen] = useState(true);

  function handlePrevious() {
    if (step === 1) stepSet((s) => s);
    else stepSet((s) => s - 1);
  }

  function handleNext() {
    if (messages.length === step) stepSet((s) => s);
    else stepSet((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsopen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              className="bn"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const question = [
  {
    id: 3333,
    question: "what language is react based on",
    answer: "javascript",
  },
  {
    id: 4444,
    question: "what is bulding block of react app",
    answer: "components",
  },
  {
    id: 1111,
    question: "what is name of syntaxt we use to describe in components",
    answer: "jsx",
  },
  {
    id: 2222,
    question: "How to pass data from parent to child",
    answer: "props",
  },
  {
    id: 5555,
    question: "what language is react based on",
    answer: "javascript",
  },
  {
    id: 6666,
    question: "How to give a component a memory",
    answer: "useSateHook",
  },
  {
    id: 7777,
    question:
      "How do we call an input that is completely synchronized by state",
    answer: "controlled Element",
  },
];

export function Flashcard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    console.log(id);
    console.log(selectedId);
  }
  return (
    <div className="flashcard ">
      {question.map((question) => (
        <div
          className={question.id === selectedId ? "selected" : ""}
          key={question.id}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
