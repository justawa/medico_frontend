import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPackageTests, userTest } from '../../actions';
import LottiesContentLoader from '../common/custom/Loader/LottiesContentLoader';

function TestList({ history, id, type }) {
  // const { id } = match.params;
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);
  const { token } = authenticated;
  const { tests, loading } = useSelector((state) => state.userTests);

  const filteredTests =
    tests[id] && tests[id].filter((test) => test.type === type);

  const foundTests = filteredTests;

  useEffect(() => {
    dispatch(getPackageTests(token, id));
  }, [dispatch, token, id]);

  function renderTest() {
    if (loading) return <LottiesContentLoader />;
    if (foundTests && foundTests.length) {
      return foundTests.map((test) => (
        <li key={test.id}>
          {test.status === 'finished' ? (
            <Link to={`${process.env.PUBLIC_URL}/test/${test.id}/result`}>
              {test.name}
            </Link>
          ) : (
            <button
              className='btn btn-link'
              onClick={() => {
                history.push(
                  `${process.env.PUBLIC_URL}/test/${test.id}/mode/${type}`
                );
                return dispatch(userTest(test));
              }}
            >
              {test.name}
            </button>
          )}
        </li>
      ));
    } else {
      return <li>No Tests</li>;
    }
  }

  return (
    <div>
      <ul>{renderTest()}</ul>
    </div>
  );
}

export default withRouter(TestList);
