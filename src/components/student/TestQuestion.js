import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuestionById,
  storeAttemptDetails,
  increaseCurrentQuestion,
  decreaseCurrentQuestion,
  setBookmarkStatus,
  fetchCorrectResult,
} from '../../actions';
import LottiesMultiContentLoader from '../common/custom/Loader/LottiesMultiContentLoader';

function TestQuestion({
  id,
  currentQuestion,
  previousQuestionId,
  lastQuestion,
  type,
}) {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const { token } = authenticated;

  useEffect(() => {
    dispatch(getQuestionById(token, id));
  }, [dispatch, token, id]);

  const { question, loading } = useSelector((state) => state.userQuestion);
  const { attempt } = useSelector((state) => state.userAttempt);
  const { attemptDetails } = useSelector((state) => state.userAttemptDetails);

  function sendAttemptDetails() {
    dispatch(storeAttemptDetails(token, attempt.id, id, answer));
    setAnswer('');
  }

  function bookmarkQuestion() {
    dispatch(setBookmarkStatus(token, attempt.id, id));
    dispatch(increaseCurrentQuestion());
  }

  function decreaseQuestionCount() {
    dispatch(decreaseCurrentQuestion());

    if (previousQuestionId) {
      dispatch(fetchCorrectResult(token, attempt.id, previousQuestionId));
    }
  }

  function renderQuestionOptions() {
    const foundAttemptToQuestion = attemptDetails.find(
      (detail) => detail.question_id === question.id
    );

    if (foundAttemptToQuestion && foundAttemptToQuestion.mode === 'attempt') {
      return (
        question.options &&
        question.options.map((option) => (
          <p key={option.id}>
            <input
              type='radio'
              value={option.content}
              onChange={() => setAnswer(option.id)}
              name='answer'
              checked={option.id === foundAttemptToQuestion.option_id}
            />{' '}
            {option.content}
          </p>
        ))
      );
    } else {
      return (
        question.options &&
        question.options.map((option) => (
          <p key={option.id}>
            <input
              type='radio'
              value={option.content}
              onChange={() => setAnswer(option.id)}
              name='answer'
            />{' '}
            {option.content}
          </p>
        ))
      );
    }
  }

  return (
    <div>
      <div className='dash-achiv p-3'>
        {loading ? (
          <LottiesMultiContentLoader />
        ) : (
          <>
            <p>
              <strong>Q{currentQuestion}. </strong> {question.content}
            </p>
            {renderQuestionOptions()}
          </>
        )}
      </div>
      {type === 'preparation' && (
        <button
          className='btn btn-secondary'
          onClick={decreaseQuestionCount}
          disabled={previousQuestionId == null}
        >
          Back
        </button>
      )}{' '}
      <button
        type='button'
        disabled={answer === ''}
        onClick={sendAttemptDetails}
        className='btn btn-info'
      >
        Submit
      </button>{' '}
      {type === 'preparation' && (
        <button className='btn btn-warning' onClick={bookmarkQuestion}>
          Bookmark
        </button>
      )}
    </div>
  );
}

export default TestQuestion;
