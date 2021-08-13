import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  attemptTest,
  increaseCurrentQuestion,
  updateAttempt,
  fetchCorrectResult,
  resetAttemptDetails,
} from '../../actions';
import Timer from '../common/custom/Timer/Timer';
import DashboardLayout from '../common/layouts/dashboard/DashboardLayout';
import TestQuestion from './TestQuestion';

function TestScreen({ match, history }) {
  const [startTest, setStartTest] = useState(false);
  const { id, type } = match.params;
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);
  const { token } = authenticated;
  const { questions, currentQuestion } = useSelector(
    (state) => state.userQuestions
  );
  const { attempt } = useSelector((state) => state.userAttempt);

  const { correct, attemptDetails } = useSelector(
    (state) => state.userAttemptDetails
  );

  const { test } = useSelector((state) => state.userTest);

  const previousQuestionId =
    currentQuestion !== 0 && currentQuestion !== ''
      ? questions[currentQuestion - 1].id
      : null;

  const nextQuestionId =
    currentQuestion !== questions.length - 1 && currentQuestion !== ''
      ? questions[currentQuestion + 1].id
      : null;

  useEffect(() => {
    dispatch(attemptTest(token, id));
  }, [dispatch, token, id]);

  function setCurrentQuestion() {
    dispatch(increaseCurrentQuestion());
    if (nextQuestionId) {
      dispatch(fetchCorrectResult(token, attempt.id, nextQuestionId));
    } else {
      dispatch(resetAttemptDetails());
    }
  }

  function updateAttemptStatus() {
    dispatch(updateAttempt(token, attempt.id));
    history.push(`${process.env.PUBLIC_URL}/test/${id}/result`);
  }

  function renderQuestionColoring() {
    const qLen = questions ? questions.length : 0;
    const attLen = attemptDetails ? attemptDetails.length : 0;
    const questionAttempted = qLen - attLen;

    const newAttemptArr = [...attemptDetails, ...new Array(questionAttempted)];

    return newAttemptArr.map((detail, idx) => (
      <li key={idx}>
        {idx + 1}
        {'  '}
        <i
          className='fa fa-circle'
          aria-hidden='true'
          style={{
            color:
              detail && detail.mode === 'attempt'
                ? 'green'
                : detail && detail.mode === 'bookmark'
                ? 'yellow'
                : 'grey',
          }}
        ></i>
      </li>
    ));
  }

  return (
    <DashboardLayout>
      <div className='container'>
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Test</h3>
        <div style={{ marginTop: 30, textAlign: 'right' }}>
          <Timer
            initialMinute={test.type === 'preparation' ? 0 : test.duration}
            token={token}
            attempt={attempt}
            id={id}
            type={test.type}
            startTimer={startTest}
          />
          {(questions.length === currentQuestion + 1 ||
            test.type === 'preparation') && (
            <button onClick={updateAttemptStatus} className='btn btn-primary'>
              End Test
            </button>
          )}
        </div>
        <div className='row'>
          <div className='col-md-8'>
            {currentQuestion === '' ? (
              <button
                onClick={() => {
                  setStartTest(true);
                  setCurrentQuestion();
                }}
                className='btn btn-primary'
              >
                Start Test
              </button>
            ) : (
              <TestQuestion
                id={questions[currentQuestion].id}
                currentQuestion={currentQuestion + 1}
                startIndex={0}
                previousQuestionId={previousQuestionId}
                lastQuestion={questions.length === currentQuestion + 1}
                type={type}
              />
            )}
          </div>
          <div className='col-md-4'>
            <div className='dash-achiv p-3'>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {/* {questions.map((question, idx) => (
                  <li key={question.id}>
                    {idx + 1}
                    {'  '}
                    <i class='fa fa-circle' aria-hidden='true'></i>
                  </li>
                ))} */}
                {renderQuestionColoring()}
              </ul>
            </div>
          </div>
        </div>
        {type === 'preparation' && correct.question && (
          <>
            <div className='row'>
              <div className='col-md-12'>
                <div className='dash-achiv p-3'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <h4>See Solution</h4>
                      <p>
                        <strong>Q. {correct.question.content}</strong>
                      </p>
                      <p>
                        <strong>A. </strong> {correct.content}
                      </p>
                    </div>
                    <div className='col-md-8'>{correct.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {correct.question && questions.length !== currentQuestion + 1 && (
          <div className='text-right'>
            <button class='btn btn-success' onClick={setCurrentQuestion}>
              Next
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default TestScreen;
