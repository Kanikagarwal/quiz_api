import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../App.css"
import QuizContext from '../contexts/QuizContext';
function Category() {
  const {setCategory} = useContext(QuizContext);

//   const navigate = useNavigate();
const handleClick = (categoryName)=>{
  // console.log(categoryName);
  let categoryId = null;
  let catName = "";
  switch (categoryName) {
    case "General Knowledge":
        categoryId = 9;
        catName = "General Knowledge";
        break;
    case "Entertainment: Books":
        categoryId = 10;
        catName = "Entertainment: Books";
        break;
    case "Entertainment: Film":
        categoryId = 11;
        catName = "Entertainment: Film";
        break;
    case "Entertainment: Music":
        categoryId = 12;
        catName = "Entertainment: Music";
        break;
    case "Entertainment: Musical and Theatres":
        categoryId = 13;
        catName = "Entertainment: Musical and Theatres";
        break;
    case "Entertainment: Television":
        categoryId = 14;
        catName = "Entertainment: Television";
        break;
    case "Entertainment: Video Games":
        categoryId = 15;
        catName = "Entertainment: Video Games";
        break;
    case "Entertainment: Board Games":
        categoryId = 16;
        catName = "Entertainment: Board Games";
        break;
    case "Science & Nature":
        categoryId = 17;
        catName = "Science & Nature";
        break;
    case "Science: Computers":
        categoryId = 18;
        catName = "Science: Computers";
        break;
    case "Science: Mathematics":
        categoryId = 19;
        catName = "Science: Mathematics";
        break;
    case "Mythology":
        categoryId = 20;
        catName = "Mythology";
        break;
    case "Sports":
        categoryId = 21;
        catName = "Sports";
        break;
    case "Geography":
        categoryId = 22;
        catName = "Geography";
        break;
    case "History":
        categoryId = 23;
        catName = "History";
        break;
    case "Politics":
        categoryId = 24;
        catName = "Politics";
        break;
    case "Art":
        categoryId = 25;
        catName = "Art";
        break;
    case "Celebrities":
        categoryId = 26;
        catName = "Celebrities";
        break;
    case "Animals":
        categoryId = 27;
        catName = "Animals";
        break;
    case "Vehicles":
        categoryId = 28;
        catName = "Vehicles";
        break;
    case "Entertainment: Comics":
        categoryId = 29;
        catName = "Entertainment: Comics";
        break;
    case "Science: Gadgets":
        categoryId = 30;
        catName = "Science: Gadgets";
        break;
    case "Entertainment: Japanese Animes & Manga":
        categoryId = 31;
        catName = "Entertainment: Japanese Animes & Manga";
        break;
    case "Entertainment: Cartoons & Animations":
        categoryId = 32;
        catName = "Entertainment: Cartoons & Animations";
        break;
    default:
        categoryId = null;
        catName = ""; // Reset catName if no match is found
        break;
}
  
  setCategory({categoryId,catName})
  
  

}
  
  return (
    <>
       <div className="container flex-col">
        <p className="text-xl pb-4">Choose Category</p>
        <div className="grid">
            <NavLink className="grid-item category-1" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">General Knowledge</NavLink>
            <NavLink className="grid-item category-2" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Books</NavLink>
            <NavLink className="grid-item category-3" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Film</NavLink>
            <NavLink className="grid-item category-4" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Music</NavLink>
            <NavLink className="grid-item category-5" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Musical and Theatres</NavLink>
            <NavLink className="grid-item category-6" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Television</NavLink>
            <NavLink className="grid-item category-7" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Video Games</NavLink>
            <NavLink className="grid-item category-8" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Board Games</NavLink>
            <NavLink className="grid-item category-9" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Science & Nature</NavLink>
            <NavLink className="grid-item category-10" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Science: Computers</NavLink>
            <NavLink className="grid-item category-11" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Science: Mathematics</NavLink>
            <NavLink className="grid-item category-12" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Mythology</NavLink>
            <NavLink className="grid-item category-13" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Sports</NavLink>
            <NavLink className="grid-item category-14" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Geography</NavLink>
            <NavLink className="grid-item category-15" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">History</NavLink>
            <NavLink className="grid-item category-16" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Politics</NavLink>
            <NavLink className="grid-item category-17" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Art</NavLink>
            <NavLink className="grid-item category-18" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Celebrities</NavLink>
            <NavLink className="grid-item category-19" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Animals</NavLink>
            <NavLink className="grid-item category-20" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Vehicles</NavLink>
            <NavLink className="grid-item category-21" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Comics</NavLink>
            <NavLink className="grid-item category-22" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Science: Gadgets</NavLink>
            <NavLink className="grid-item category-23" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Japanese Animes & Manga</NavLink>
            <NavLink className="grid-item category-24" onClick={(e)=>handleClick(e.target.innerText)} to="/questions">Entertainment: Cartoons & Animations</NavLink>
        </div>
    </div>
    </>
  )
}

export default Category
