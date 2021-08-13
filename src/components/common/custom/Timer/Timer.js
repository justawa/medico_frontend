import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { updateAttempt } from '../../../../actions';

const Timer = ({
  history,
  initialMinute = 0,
  initialSeconds = 0,
  token,
  attempt,
  id,
  type,
  startTimer,
}) => {
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval;
    if (startTimer) {
      if (type === 'preparation') {
        myInterval = setInterval(() => {
          if (seconds === 59) {
            setSeconds(0);
            setMinutes(parseInt(minutes) + 1);
          } else {
            setSeconds(seconds + 1);
          }
        }, 1000);
      } else {
        myInterval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myInterval);
              dispatch(updateAttempt(token, attempt.id));
              history.push(`${process.env.PUBLIC_URL}/test/${id}/result`);
            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          }
        }, 1000);
      }
    }
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div style={{ display: 'inline-block', marginRight: 15 }}>
      {minutes === 0 && seconds === 0 ? null : (
        <h5>
          {' '}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h5>
      )}
    </div>
  );
};

export default withRouter(Timer);
