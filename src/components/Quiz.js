import React, { useState } from "react";

export default function Quiz({ question, options, answerIndex }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
    setIsCorrect(index === answerIndex);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "8px", marginBottom: "20px" }}>
      <p><strong>{question}</strong></p>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(index)}
          style={{
            display: "block",
            margin: "5px 0",
            padding: "10px",
            width: "100%",
            textAlign: "left",
            backgroundColor: selectedOption === index ? (isCorrect ? "#4CAF50" : "#FF5252") : "#f0f0f0",
            color: selectedOption === index ? "#fff" : "#000",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {option}
        </button>
      ))}
      {selectedOption !== null && (
        <p style={{ color: isCorrect ? "green" : "red", fontWeight: "bold" }}>
          {isCorrect ? "✅ Correct!" : "❌ Incorrect, try again!"}
        </p>
      )}
    </div>
  );
}
