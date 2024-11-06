import React, { useState } from "react";
import QuizContext from "./QuizContext";

const QuizContextProvider = ({children})=>{
    const [category,setCategory] = useState(null);
return(
    <QuizContext.Provider value={{category,setCategory}}>
        {children}
    </QuizContext.Provider>
)
}

export default QuizContextProvider