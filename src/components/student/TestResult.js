import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-google-charts';
import { useDispatch, useSelector } from 'react-redux';
import { getTestResult } from '../../actions';
import DashboardLayout from '../common/layouts/dashboard/DashboardLayout';

function TestResult({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const { token } = authenticated;

  const { result } = useSelector((state) => state.userTestResult);

  const percentage = ((result.correct / result.total) * 100).toFixed(1);

  useEffect(() => {
    dispatch(getTestResult(token, id));
  }, [dispatch, token, id]);

  return (
    <DashboardLayout>
      <section className='secc'>
        <div className='container'>
          <h4>Bulletin Board</h4>
          <div className='row'>
            <div className='col-md-5'>
              <div className='dash-achiv p-3' style={{ borderRadius: 8 }}>
                <h3>Your Progress</h3>
                <Chart
                  width={'400px'}
                  height={'400px'}
                  chartType='PieChart'
                  loader={<div>Loading Your Progress</div>}
                  data={[
                    ['Type', 'Performance'],
                    ['Correct', result.correct],
                    ['Incorrect', result.incorrect],
                  ]}
                  options={{
                    title: 'Test Progress',
                    pieHole: 0.35,
                    colors: ['#3FE2D1', '#636363'],
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
              </div>
            </div>
            <div className='col-md-7'>
              <div className='dash-achiv p-3' style={{ borderRadius: 8 }}>
                <div className='d-flex justify-content-between p-1'>
                  <h4>Total Question</h4>
                  <h4>{result.total}</h4>
                </div>

                <div
                  className='d-flex justify-content-between p-2 my-2'
                  style={{ background: '#63C2FC', color: 'white' }}
                >
                  <strong>Attempted Question</strong>
                  <strong>{result.attempt}</strong>
                </div>

                <div
                  className='d-flex justify-content-between p-2 my-2'
                  style={{ background: '#429DD4', color: 'white' }}
                >
                  <strong>Not Attempted Question</strong>
                  <strong>{result.not_attempt}</strong>
                </div>

                <div
                  className='d-flex justify-content-between p-2 my-2'
                  style={{ background: '#2780B8', color: 'white' }}
                >
                  <strong>Right Answer</strong>
                  <strong>{result.correct}</strong>
                </div>

                <div
                  className='d-flex justify-content-between p-2 my-2'
                  style={{ background: '#176798', color: 'white' }}
                >
                  <strong>Wrong Answer</strong>
                  <strong>{result.incorrect}</strong>
                </div>
              </div>

              <div className='dash-achiv p-3' style={{ borderRadius: 8 }}>
                <div
                  className='d-flex justify-content-between p-2 my-2'
                  style={{ background: '#E7E7E7', color: '#333' }}
                >
                  <strong>Percentage</strong>
                  <strong>{percentage}%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default TestResult;

// {
//   details &&
//     details.map((detail, idx) => {
//       return (
//         <div class='col-md-12'>
//           <p>
//             <strong>{idx + 1}.</strong> {detail.question.content}
//           </p>
//           {detail.question.options.map((option) => (
//             <li>
//               {option.content}{' '}
//               {option.correct === 1 ? <strong>Correct answer</strong> : null}{' '}
//               {detail.option_id === option.id ? (
//                 <strong>Your answer</strong>
//               ) : null}{' '}
//             </li>
//           ))}
//           {detail.is_correct === 1 ? (
//             <strong style={{ color: 'green' }}>Your answer correct</strong>
//           ) : (
//             <strong style={{ color: 'red' }}>Your answer incorrect</strong>
//           )}
//           <hr />
//         </div>
//       );
//     });
// }
