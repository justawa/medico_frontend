import PageLayout from '../common/layouts/pages/PageLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect } from 'react';

export default function Counselling() {


  const [coun , setcoun ]=useState([]);
  useEffect( async ()=>{
  let result = await fetch("https://justconsult.org/medoc_api/api/v1/showc");
  result =await result.json();
  setcoun(result)
  },[])
  console.warn("coun",coun) 


  return (

    <PageLayout>

      <section class="doc-icon">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-12 d-flex align-items-center">
              <div class="">
                <h1 class="text-uppercase"><b>Counseling </b>Profile</h1>
                <div class="line"></div>
                <p>Select Your Counselor</p>
              </div></div>
               <div class="col-lg-8 col-md-8 col-12">
               <div class="row">
                    {
                      coun.map((sau)=>                             
                  <div class="col-md-4 col-lg-4 col-12">
                  <div class="p-3 text-center counseler-div">                       
                  <div class="image-counseler">
                  <img src={"https://justconsult.org/medoc_api/Counselling/"+sau.profile_image} />
                  </div>
                  <h4><b>{sau.name}</b></h4>
                  <p class="text-uppercase blue">{sau.specilization}</p>
                  <p><i class="fa fa-map-marker" aria-hidden="true"></i> {sau.place}</p>                    
                  </div>
                  </div>
                    )
                  }
                </div>
                </div>
                
              </div>
            </div>
              
      </section>
      <section class="bg-sea-gr">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12 text-center">
              <h1><b>Regestration</b> Form</h1>
              <div class="line1"></div>
            </div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <input type="text" id="inputName" class="form-control" placeholder="Name" required autofocus />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <input type="text" id="inputAge" class="form-control" placeholder="Age" required autofocus />
            </div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <select class="form-control">
                <option>Qualification</option>
                <option>MSC</option>
                <option>BSC</option>
                <option>12</option>
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <input type="text" id="inputAddress" class="form-control" placeholder="Address" required autofocus />
            </div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <select class="form-control">
                <option>Education ins</option>
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus />
            </div>
          </div>
        <br></br>


          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <select class="form-control">
                <option>Sex</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12"><input type="tel" id="inputAge" class="form-control" placeholder="Phone No" required autofocus /></div>
                <div class="col-lg-6 col-md-6 col-12"><input type="tel" id="inputAge" class="form-control" placeholder="Alternate No" required autofocus /></div>
              </div>
            </div>
          </div>

        <br></br>
          <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
              <select class="form-control">
                <option>Query</option>
                <option>Personal (200Rs)</option>
                <option>Medical (200Rs)</option>
                <option>Education (200Rs)</option>
              </select>
	           </div>
            </div>
            <br></br>

            <div class="row">
              <div class="col-12">
                <h6 class="mb-3">Condition Query</h6>
                <textarea class="form-control" placeholder="Counselor" required autofocus></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-12 text-center"> <br></br>
                <a class="btn btn-success" href="">Submit</a>
              </div>
            </div>

          </div>
      </section>
   
</PageLayout>

              );
}
