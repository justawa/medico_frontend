import PageLayout from '../common/layouts/pages/PageLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect } from 'react';

export default function Test() {

    const [testt , settestt ]=useState([]);
useEffect( async ()=>{
let result = await fetch("https://justconsult.org/medoc_api/api/v1/tests");
result =await result.json();
settestt(result)
},[])
console.warn("test",testt)  


    return (

        <PageLayout>
             <h1 class="text-center">
                  <b>Test</b> / Details
                  <br />
                </h1>
 {
                  testt.map((tws)=>
              <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='conselling-b1'>
               
                <ul className='list-arrow'>
                  <li> Name: {tws.name}</li>
                  <li>Total Question:{ tws.total_questions} </li>
                  <li>Duration: { tws.duration}</li>
                  <li>Type: { tws.type}</li>
                  <li>Package: Merged</li>
                  <li>Score: { tws.score}</li>
                  <li>Summary: { tws.summary}</li>
                </ul>
              </div>
              <br></br>
            </div>
        
                    )
                  }



</PageLayout>

);
}
