import { error } from "console";
import { shuffleArray } from "./Utils";

export type Question ={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export enum Difficulty{
    EASY="easy",
    MEDIUM= "medium",
    HARD= "hard"
}

export type QuestionState = Question & {answers: string[]};

export const fetchQuizQuestions = async(amount: number , difficulty:Difficulty): Promise<QuestionState[]>=>{
    try{
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
      const response = await fetch(endpoint)
    if(!response.ok){
         throw new Error("Failed to fetch the quiz questions")
    }
    const data = await response.json()
    return data.results.map((question: Question)=>(
        {
        ...question,
        answers: shuffleArray([...question.incorrect_answers,question.correct_answer]),
        }
    ))
   } catch(error){
      console.log("Error fetching quiz questions" , error)
      throw error;
   } 
}  