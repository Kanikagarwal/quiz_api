import React, { useContext, useState } from 'react'
import "../App.css"
import QuizContext from '../contexts/QuizContext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Ques() {
  const {category,setCategory} = useContext(QuizContext);
  const navigate = useNavigate();
  const [question,setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [correct,setCorrect] = useState("");
  const [catName,setCatName] = useState("");
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  // console.log(category);
  // console.log(url);

  useEffect(()=>{
    if (!category) {
      navigate('/category'); // Redirect if category is missing
      return;
    }
    let url = `https://opentdb.com/api.php?amount=1&category=${category.categoryId}&difficulty=easy&type=multiple`;
    fetch(url)
    .then((res)=>res.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        setCatName(data.results[0].category);
        setCorrect(data.results[0].correct_answer);
        setQuestion(data.results[0].question);
        let newOptions = [
          data.results[0].correct_answer,
          ...data.results[0].incorrect_answers
        ]
        setOptions(newOptions.sort(()=>Math.random()-0.5));
      }
    })
    .catch((error) => console.error("Error fetching question:", error));
  },[category,navigate,setCategory])
  // console.log(question);
  // console.log(correct);

  let optionArray = document.querySelectorAll(".option");
  if(submitted==false){
  optionArray.forEach((option)=>{
      option.addEventListener("click",function (e) {
        optionArray.forEach((elem)=>{
          elem.style.backgroundColor = "#b579fe"
        })
        e.target.style.backgroundColor = "#fb923c";
      })
      
    })
  }
  

  const handleOptionClick = (option) => {
    if (submitted) return; 
    if(!submitted){
      setSelected(option);
    }
  };
// console.log(selected);

  const onSubmit = () => {
    if (submitted) return; 
    setSubmitted(true);
    if (selected === correct) {
      optionArray.forEach((e)=>{
        if(e.innerText==selected){
          e.style.backgroundColor = "#008000";
        }
      })
      
    } else {
      optionArray.forEach((e)=>{
        e.style.backgroundColor = "red";
        if(e.innerText==correct){
          e.style.backgroundColor = "#008000";
        }
      })
    }
  };


  

  console.log(submitted);
  
  return (
    <div>
      <div className="container">
        <div className="ques_box p-4">
            <div className="text-gray-500 ">Category: {catName}</div>
            <div className="flex mt-10 m-4">
                <span>Q.</span>
                <p className="ml-2">
                    {question}
                </p>
            </div>
            <div className="options flex flex-col m-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`option mt-4 rounded m-2 p-4 cursor-pointer`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
                
            </div>
            <button className="text-center rounded btn-1" onClick={onSubmit} disabled={submitted}>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Ques
