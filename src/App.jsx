import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
     <div className="innerbody">
        <div className="circle circle1"></div>
    <div className="circle circle2"></div>
    <div className="circle circle3"></div>
    <div className="circle circle4"></div>
    <div className="circle circle5"></div>
    </div>
    <div className="container">
        <div className="ques_box p-4">
            <div className="text-gray-500 ">Category: Entertainment</div>
            <div className="flex mt-10 m-4">
                <span>Q.</span>
                <p className="ml-2">
                    In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?
                </p>
            </div>
            <div className="options flex flex-col m-4">
                <div className="option mt-4 rounded m-2 p-4 cursor-pointer">Final</div>
                <div className="option m-2 rounded p-4 cursor-pointer">Static</div>
                <div className="option m-2 rounded p-4 cursor-pointer">Private</div>
                <div className="option m-2 rounded p-4 cursor-pointer">Public</div>
            </div>
            <button className="text-center rounded">Submit</button>
        </div>
    </div>
      </>
  )
}

export default App
