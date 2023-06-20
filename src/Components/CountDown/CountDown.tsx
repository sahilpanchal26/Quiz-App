import React,{useEffect} from "react";
import {TiStopwatch} from 'react-icons/ti'
import { Wrapper } from "../QuestionCardStyle";

type Props={
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    minutes: number;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const CountDown: React.FC<Props> = ({setMinutes , minutes , seconds , setSeconds})=>{
    useEffect(() => {
        const timer = setInterval(() => {
          setSeconds(seconds + 1);
          if (seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
          }
          if (seconds === 10) {
            clearInterval(timer);
          }
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      });
    
      return (
        <Wrapper>
          <TiStopwatch style={{ fontSize: "20px" }} />{" "}
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Wrapper>
      );

}
export default CountDown;