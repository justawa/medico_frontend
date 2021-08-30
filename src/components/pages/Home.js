import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPackages } from '../../actions';
import PageLayout from '../common/layouts/pages/PageLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 


export default function Home() {
  const dispatch = useDispatch();

  const { grandTests } = useSelector((state) => state.grandTests);

  useEffect(() => {
    dispatch(getUserPackages());
  }, [dispatch]);
 
  const [data , setData ]=useState([]);
  useEffect( async ()=>{
  let result = await fetch("http://localhost:8000/api/showimage");
  result =await result.json();
  setData(result)
},[])
console.warn("result",data)  

// Image Headline

const [Headline , setHeadline ]=useState([]);
useEffect( async ()=>{
let result = await fetch("http://localhost:8000/api/showhead");
result =await result.json();
setHeadline(result)
},[])
console.warn("headline",Headline)  

const [Intro , setIntro]=useState([]);
useEffect( async ()=>{
let result = await fetch("http://localhost:8000/api/showabout");
result =await result.json();
setIntro(result)
},[])
console.warn("about",Intro) 

const [testt , settestt ]=useState([]);
useEffect( async ()=>{
let result = await fetch("http://localhost:8000/api/tests");
result =await result.json();
settestt(result)
},[])
console.warn("test",testt)  

const [achi , setachi ]=useState([]);
useEffect( async ()=>{
let result = await fetch("http://localhost:8000/api/showa");
result =await result.json();
setachi(result)
},[])
console.warn("test",achi)  
   
const [coun , setcoun ]=useState([]);
useEffect( async ()=>{
let result = await fetch("http://localhost:8000/api/showc");
result =await result.json();
setcoun(result)
},[])
console.warn("coun",coun)  

const [noti , setnoti ]=useState([]);
useEffect( async ()=>{
let result = await fetch("http://localhost:8000/api/shown");
result =await result.json();
setnoti(result)
},[])
console.warn("notice",noti)  



  // function renderGrandTests() {
  //   if (grandTests.length) {
  //     return grandTests.map((test) => <li>{test.name}</li>);
  //   } else {
  //     return <li>No Tests</li>;
  //   }
  // }

  return (
    <PageLayout>
            {/* Saurav */}
            {/* <div className=' col-lg-6 col-md-6 col-sm-12'> */}
             
             <br></br>
             <Carousel>
                {
                  data.map((item)=>
                   <Carousel.Item interval={1500}>

                   <img alt='' className='img-fluid w-100' src={"http://127.0.0.1:8000/uploads/banner/"+item.profile_image} style ={{ height:"550px"}}  />
                   
                   <div class="carousel-content">
                    
                    <p class="poster">{item.title}</p>    
                    <button className='blue-btn'>Read More</button>      
                   </div>                   
                   </Carousel.Item>
                    )
                }
             </Carousel>

            {/* </div> */}
            <section className='sec-b'>
            <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            {/* <h1 className='font-5'>
            {
                  Headline.map((h)=>
              <b>
                {h.headline}
              </b>
                   
                    )
                }
              </h1>
               
              <button className='blue-btn'>Read More</button> */}
            </div>
          </div>
        </div>
        <div className='fix-doc'>
          <img alt='' style={{ width: 30 }} src='images/doctor.svg' />
          C<br />O<br />U<br />N<br />S<br />E<br />L<br />L<br />I<br />N<br />
          G
        </div>
        <div className='fix-lap'>
          <img alt='' style={{ width: 30 }} src='images/laptop.svg' />
          C<br />O<br /> U<br /> R<br />S <br />E <br />S
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
              <h1>
                <b>About</b> Medoc Insights
              </h1>
              <div className='line'></div>
              {
                Intro.map((a)=>
            
              <p className='text-justify'>  {a.about}   </p>
                   
                    )
                }
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='conselling-b'>
                <h4 className='text-center'>Notice</h4>
                   {
                noti.map((notic)=>
                <ul className='list-arrow'>
                  <li className='text-justify'>
                  
            
                    {notic.notice}  
                   
                  </li>
                   
                 
                </ul>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='conselling-b'>
                <h1>
                  <b>Special</b> Counselling
                  <br /> Session{' '}
                </h1>
                <div className='line'></div>
                <ul className='list-arrow'>
                {
                      coun.map((sau)=> 
                <li> <Link className='menu-item' to={`${process.env.PUBLIC_URL}/counselling`}> {sau.name} </Link>  </li>
                      )}
                  {/* <li>Special Counselling Session </li>
                  <li>Special Counselling Session </li>
                  <li>Special Counselling Session </li> */}
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='conselling-b1'>
                <h1>
                  <b>Grand</b> / Monthly
                  <br />
                   {/* Test{' '} */}
                </h1>
                <div className='line'></div>
                <ul className='list-arrow'>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th class="th">Total Question</th>
                        {/* <th>Duration</th> */}
                      </tr>
                    </thead>
                    <tbody>
                  {
                  testt.map((tws)=>
                      <tr>
                  <Link className='menu-item' to={`${process.env.PUBLIC_URL}/test`}> <td class="td"> {tws.name} </td>  </Link>             
                  <td class="td">  { tws.total_questions} </td>
                  {/* <td class="td">  { tws.duration} </td> */}
                   
                      </tr>
                    )
                  }
                    </tbody>
                  </table>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='text-center text-uppercase pb-5'>
            <h1>
              <b>why choose us</b> for preparation
            </h1>
            <div className='line1'></div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
              <div className='text-center p-5 border-right border-bottom blue-bg min-h'>
                <img alt='' className='ab' src='images/icon1.png' />
                <img alt='' className='bb' src='images/icon1-white.png' />
                <h4 className='mt-3 mb-3 text-uppercase'>
                  <b>The Best</b> Online Series
                </h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
              <div className='text-center p-5 border-right border-bottom blue-bg min-h'>
                <img alt='' className='ab' src='images/icon2.png' />
                <img alt='' className='bb' src='images/icon2-white.png' />
                <h4 className='mt-3 mb-3 text-uppercase'>
                  <b>The Largest</b> Q Bank
                </h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
              <div className='text-center p-5 border-bottom blue-bg min-h'>
                <img alt='' className='ab' src='images/icon3.png' />
                <img alt='' className='bb' src='images/icon3-white.png' />
                <h4 className='mt-3 mb-3 text-uppercase'>
                  <b>Maximum</b> Specialities
                </h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
              <div className='text-center p-5 border-right blue-bg min-h'>
                <img alt='' className='ab' src='images/icon4.png' />
                <img alt='' className='bb' src='images/icon4-white.png' />
                <h4 className='mt-3 mb-3  text-uppercase'>
                  <b>Latest Matter</b> Updated
                </h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
              <div className='text-center p-5 border-right blue-bg min-h'>
                <img alt='' className='ab' src='images/icon5.png' />
                <img alt='' className='bb' src='images/icon5-white.png' />
                <h4 className='mt-3 mb-3 text-uppercase'>
                  <b>Examination</b> Simulation
                </h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 p-0'>
              <div className='text-center p-5 blue-bg min-h'>
                <img alt='' className='ab' src='images/icon6.png' />
                <img alt='' className='bb' src='images/icon6-white.png' />
                <h4 className='mt-3 mb-3 text-uppercase'>
                  <b>Graphic Self</b> Assessment
                </h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sampel-paper'>
        <div className='container'>
          <div className='text-center text-uppercase pb-5'>
            <h1>
              <b>Sample</b> paper
            </h1>
            <div className='line1'></div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <ul className='list-arrow1'>
                <li>261 Tests (72 grand tests &amp; 189 special tests)</li>
                <li>Performance analytics</li>
                <li>Taken by over 1 lakh participants</li>
                <li>Simulates the real exam</li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <ul className='list-arrow1'>
                <li>261 Tests (72 grand tests &amp; 189 special tests)</li>
                <li>Performance analytics</li>
                <li>Taken by over 1 lakh participants</li>
                <li>Simulates the real exam</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='faculty'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img alt='' className='img-fluid' src='images/computer.png' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <h1 className='pt-5 mt-5'>
                <b>700+ hours</b> of videos by 19 legendary
                <b>Faculty</b>
              </h1>
            </div>
            <div className='text-center col-lg-12 col-md-12 col-sm-12'>
              <button className='blue-btn'>Insights</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='text-center text-uppercase pb-5'>
            <h1>
              <b>Achi</b>evers
            </h1>
            <div className='line1'></div>
            <div id='demo' className='carousel slide pt-5' data-ride='carousel'>
              <ul className='carousel-indicators'>
                <li
                  data-target='#demo'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li data-target='#demo' data-slide-to='1'></li>
                <li data-target='#demo' data-slide-to='2'></li>
              </ul>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row'>
                    {
                      achi.map((ite)=>


                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src={"http://127.0.0.1:8000/Achiever/"+ite.profile_image} />
                        <h4><b>{ite.name}</b></h4>
                        <p>Remark: {ite.percent}%</p>
                      </div>
                    </div>
                      )
                    }

                    {/* <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img
                          alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='carousel-item '>
                  <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png'/>
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='carousel-item'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png'/>
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png'/>
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div>
                    
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                      <div className='achiv text-center p-3'>
                        <img alt='' className='img-arc' src='images/achiver.png' />
                        <h4><b>ANKIT</b></h4>
                        <p>Remark: 90%</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
