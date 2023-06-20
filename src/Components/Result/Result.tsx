import React from 'react';
import { Wrapper, ButtonWrapper } from './ResultStyle';
type Props = {
  score: number;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  totalTime:  {min: number , sec: number}; 
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
};

const Results: React.FC<Props> = ({
  score,
  setGameOver,
  setReset,
  reset,
  setMinutes,
  totalTime,
  setSeconds,
}) => {
  return (
    <div>
      <Wrapper>
        {!reset && (
          <>
            {/* <p>Total Questions: 10 </p>
            <p>Correct Answers: {score}</p>
            <p>Score: {score * 10}%</p> */}
            {/* <p>
              Total Time Taken:{" "}
              {totalTime.min < 10 ? "0" + totalTime.min : totalTime} 
              {totalTime.min < 10 ? "0" + totalTime.min : totalTime} 
              </p> */}

            <ButtonWrapper>
              <button
                onClick={() => {
                  setReset(true);
                  setGameOver(true);
                  setMinutes(0);
                  setSeconds(0);
                }}
                className="reset"
              >
                Back to Home{" "}
              </button>{" "}
            </ButtonWrapper>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Results;