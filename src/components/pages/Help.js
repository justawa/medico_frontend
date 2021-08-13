import React, { useState } from 'react';
import PageLayout from '../common/layouts/pages/PageLayout';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {helpSupport} from '../../actions';

function Help({ history }) {
  // const dispatch = useDispatch();
    const [subject,setSubject]=useState("")
    const [description,setDescription]=useState("")
    const [attachement,setAttachement]=useState("")

  //const dispatch = useDispatch();

  // const { authenticated } = useSelector((state) => state.auth);
  // const { token, user } = authenticated;
  
  if(JSON.parse(localStorage.getItem("user")) == undefined || JSON.parse(localStorage.getItem("user")) ==  null){
    history.push(`${process.env.PUBLIC_URL}/dashboard`);
  } 
  

  // function AsendQuery(id){
  //   if (token) {
  //     dispatch(helpSupport(token, id));
  //     history.push(`${process.env.PUBLIC_URL}/support`);
  //   } else {
  //     history.push(`${process.env.PUBLIC_URL}/login?redirect=help`);
  //   }
  // } 
        
       

        // console.warn(userid)

        async function sendQuery() {
          let user_id = JSON.parse(localStorage.getItem("user")).id;
          let item = {user_id, subject, description, attachement}
          //console.warn(item);
            // const formData = new FormData();
            // formData.append('userid', userid);
            // formData.append('question', inputbox);
           
            let result = await fetch("http://localhost:8000/api/userquery/", {
        
              method: 'POST',
              body: JSON.stringify(item),
              
              headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
              }
            })
             result = await result.json();

             if (result['success'] == true) {
            //  dispatch(support(user_id));
              history.push(`${process.env.PUBLIC_URL}/support`);
            } else {
              history.push(`${process.env.PUBLIC_URL}/login?redirect=help`);
            }
            
        
        }

  return (
    
    <PageLayout>
    <div className='container'>
    <Link className='float-right btn btn-primary' to={`${process.env.PUBLIC_URL}/support`}>View Ticket</Link>
      <h1 className='text-center'>Need help ?</h1>
        <div className="col-sm-6 offset-sm-3 mt-2">
         
            <label className="font-weight-bold" htmlFor="subject">Subject</label>
            <input  type="text" id="subject" name="subject" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" /><br></br>
            <label className="font-weight-bold" htmlFor="message">Description</label>
            <textarea className="form-control" id="message" name="description" rows="6" cols="15" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea><br></br>
            {/* <label className="font-weight-bold" htmlFor="file">Attachement</label><br></br> */}
            
            <button className="btn btn-primary mt-4" onClick={() => sendQuery()} >Submit</button>
          
        </div>
    </div>
    
     </PageLayout> 

  );
}

export default Help;
