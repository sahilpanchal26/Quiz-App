import React,{useState , useEffect} from 'react';
// component
import QuestionCard from './Components/QuestionCard';
import { fetchQuizQuestions } from './Components/Api';
// types
import { QuestionState, Difficulty } from './Components/Api';
// style
import { GlobalStyle , Wrapper } from './Components/Style';
import CountDown from './Components/CountDown/CountDown';
import Results from './Components/Result/Result';

export type AnswerObject={
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const Total_Question = 10;

const App: React.FC = ()=> {
const[Loading,setLoading] = useState(false)
const[questions,setQuestions] = useState<QuestionState[]>([])
const[number,setNumber] = useState(0)
const[userAnswers,setUserAnswers] = useState<AnswerObject[]>([])
const[score,setScore] = useState(0)
const[gameOver,setGameOver] = useState(true)
const [minutes, setMinutes] = useState(0);
const [stop, setStop] = useState(true);
const [start, setStart] = useState(false);
const [reset, setReset] = useState(false);
const [seconds, setSeconds] = useState(0);
const [totalTime, setTotalTime] = useState({ min: 0, sec: 0 });

useEffect(() => {
  if (minutes === 1) {
    setStop(false);
    setTotalTime({ min: 1, sec: 0 });
  }
}, [minutes]);

useEffect(() => {
  if (userAnswers.length === Total_Question) {
    setTotalTime({ min: minutes, sec: seconds });
    console.log(totalTime);
  }
}, [userAnswers.length === Total_Question]);

  const startQuiz= async()=>{
    setReset(false);
    setStop(true);
    setLoading(true);
    setGameOver(false);
    setStart(true);

    const newQuestion = await fetchQuizQuestions(
      Total_Question,
      Difficulty.EASY
    )

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: any)=>{
      if(!gameOver){
        // check useranswer
        const answer = e.currentTarget.value;
      // check answer against correctanswer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if(correct) setScore(prev=> prev + 1);
      // save answer in array for user answer
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev)=>[...prev , AnswerObject]);
    }
  }
  
  const nextQuestion=()=>{
    //move on to the next question if not the last quwstion 
     const nextQuestion = number + 1;
     if(nextQuestion===Total_Question){
      setGameOver(true)
     }
     else{
      setNumber(nextQuestion)
     }
  }
  return (
    <>
     <GlobalStyle/>
    <Wrapper>
    <h1>React Quiz</h1>
    {gameOver || reset ? ( <button className='start' onClick={startQuiz}>Start</button>
    ): null }
    {/* {gameOver || userAnswers.length===Total_Question? (
      <button className='start' onClick={startQuiz}>Start</button>
    ): null } */}
    {stop && start && userAnswers.length !== Total_Question && !Loading && (
      <CountDown
      setMinutes={setMinutes}
      minutes={minutes}
      setSeconds={setSeconds}
      seconds={seconds}
      />
    )}
    {!gameOver ? <p className='score'>Score: {score} </p> : null}
    { Loading && <p>Loading Questions.....</p>}
    {!Loading && !gameOver && stop && userAnswers.length !== Total_Question &&(
      <QuestionCard 
        questionNumber={number+1} 
        totalQuestions={Total_Question}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}
      /> 
    )}
    {!gameOver && !Loading && userAnswers.length=== number+1 && number!== Total_Question - 1 ? (
        <button className='next' onClick={nextQuestion}>Next Question</button>
    ): null}
    {(userAnswers.length === Total_Question || !stop) &&
          !Loading &&
          !reset && (
            <Results
              score={score}
              setGameOver={setGameOver}
              setReset={setReset}
              reset={reset}
              setMinutes={setMinutes}
              totalTime={totalTime}
              setSeconds={setSeconds}
            />
          )}
    </Wrapper>
    </>
  );
}
export default App;
