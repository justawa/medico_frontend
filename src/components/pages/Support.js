import React, { useEffect, useState } from 'react';
import PageLayout from '../common/layouts/pages/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import LottiesLoader from '../common/custom/Loader/LottiesLoader';
import PropTypes from 'prop-types';
import Login from '../authentication/Login';
import { Link } from 'react-router-dom';
import { support } from '../../actions';
// import { useLayoutEffect } from 'react';

    Support.propTypes = {
        TicketList: PropTypes.array,
       
    };
    Support.defaulProps = {
        TicketList: [],
        loading: true
    };

function Support({history}) {

    const dispatch = useDispatch();
   
    
    // const { loading } = useSelector((state) => state.support);
    const { authenticated } = useSelector((state) => state.auth);
    const { token } = authenticated;
    
    if(JSON.parse(localStorage.getItem("user")) == undefined || JSON.parse(localStorage.getItem("user")) ==  null){
        history.push(`${process.env.PUBLIC_URL}/dashboard`);
      } 
//     function supporthelp(id){
//     if (token) {
//         dispatch(support(token,id));
//         history.push(`${process.env.PUBLIC_URL}/dashboard`);
//       } else {
//         history.push(`${process.env.PUBLIC_URL}/login?redirect=support`);
//       }
//    }

//    const {TicketList} = props;
    //   const { loading } = useSelector((state) => state.support);
  
   
   
    // console.log('user_id' + id );
    const [TicketList, setTicketList, loading] = useState([]);
   
    
     useEffect(() => {
        async function fetchTicketList() {

            try {
                let user_id = JSON.parse(localStorage.getItem("user")).id;
                const responseUrl = 'http://localhost:8000/api/userquery/'+ user_id + '/';
                const response = await fetch(responseUrl);
                const responseJson = await response.json();
                console.log(responseJson);
                setTicketList(responseJson);
            } catch{

            }
        }
        fetchTicketList();
    }, []);

    return (
        <PageLayout>
            {/* <section className='secc'> */}
                <div class="container">
                {loading ? (
                    <LottiesLoader />
                ) :
                TicketList.length ? (
                <table class="table table-bordered mt-4">
                    <tr>
                        <th>Ticket ID</th>
                        {/* <th>Name</th> */}
                        <th>Subject</th>
                        <th>Response</th>
                        <th>Status</th>
                    </tr>
                    {TicketList.map((ticket) => (
                    <tr>
                        <td>{ticket.ticket_id}</td>
                        {/* <td>{ticket.name}</td> */}
                        <td>{ticket.subject}</td>
                        <td>{ticket.reply}</td>
                        <td>{ticket.active == 1 ? 'Active' : 'Not Active'}</td>
                    </tr>
                    ))}
                </table>
                ): (
                    <p className='text-center'>
                        No Ticket found {' '}
                        <Link to={`${process.env.PUBLIC_URL}/help`}>Ask for help</Link>
                    </p>
            
                // )}
                 )}
                </div>
    
            {/* </section> */}
        </PageLayout>
      
    )
}

export default Support;
