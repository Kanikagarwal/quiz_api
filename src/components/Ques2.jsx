import React, { useContext, useState, useEffect } from 'react';
import "../App.css";
import QuizContext from '../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';

function Ques2() {
  const { category } = useContext(QuizContext);
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState("");
  const [catName, setCatName] = useState("");
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!category) {
      navigate('/category'); // Redirect if category is missing
      return;
    }

    const url = `https://opentdb.com/api.php?amount=1&category=${category.categoryId}&difficulty=easy&type=multiple`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setCatName(data.results[0].category);
          setCorrect(data.results[0].correct_answer);
          setQuestion(data.results[0].question);
          let newOptions = [
            data.results[0].correct_answer,
            ...data.results[0].incorrect_answers,
          ];
          setOptions(newOptions.sort(() => Math.random() - 0.5));
        }
      })
      .catch((error) => console.error("Error fetching question:", error));
  }, [category, navigate]);

  const handleOptionClick = (option) => {
    if (!submitted) {
      setSelected(option);
    }
  };

  const onSubmit = () => {
    setSubmitted(true);
  };

  const getOptionStyle = (option) => {
    if (!submitted) {
      return selected === option ? "bg-orange-500" : "bg-purple-300";
    } else {
      if (option === correct) {
        return "bg-green-500"; // Correct answer color
      } else if (option === selected) {
        return "bg-red-500"; // Wrong answer color
      }
      return "bg-purple-300"; // Default color for other options
    }
  };

  return (
    <div>
      <div className="container">
        <div className="ques_box p-4">
          <div className="text-gray-500 ">Category: {catName}</div>
          <div className="flex mt-10 m-4">
            <span>Q.</span>
            <p className="ml-2">{question}</p>
          </div>
          <div className="options flex flex-col m-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`option mt-4 rounded m-2 p-4 cursor-pointer ${getOptionStyle(option)}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <button className="text-center rounded btn-1" onClick={onSubmit} disabled={submitted}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ques2;
