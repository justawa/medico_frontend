import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../common/layouts/dashboard/DashboardLayout';
import { buyUserPackage, removeItemFromCart } from '../../actions';
import LottiesLoader from '../common/custom/Loader/LottiesLoader';
import { Button, ListGroup, ListGroupItem, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

function Cart({ history }) {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);
  const { token } = authenticated;

  const { loading, items } = useSelector((state) => state.cart);

  if(JSON.parse(localStorage.getItem("user")) == null){
    history.push(`${process.env.PUBLIC_URL}/login`);
  }
  // function buyPackage(id) {
  //   if (token) {
  //     dispatch(buyUserPackage(token, id));
  //     history.push(`${process.env.PUBLIC_URL}/dashboard`);
  //   } else {
  //     history.push(`${process.env.PUBLIC_URL}/login?redirect=cart`);
  //   }
  // }

  function calculateCartAmount() {
    return items.reduce((total, item) => {
      return (parseFloat(total) + parseFloat(item.price)).toFixed(2);
    }, 0);
  }

  function removeFromCart(id) {
    dispatch(removeItemFromCart(id));
  }


  // let Data = JSON.parse(localStorage.getItem("user")).name;
  //let packData = JSON.parse(localStorage.getItem("cart")).items.name;

 
  //  console.warn(packData);
   
  const [pid, setPid] = useState("");
  const [studentid, setStudentid] = useState("");
  const [student_id, setStudent_id] = useState("");

  // const [amount, setAmount] = useState(calculateCartAmount());
  const [status, setStatus] = useState("1");
   
  async function buyPackage(id) {
    // if (token) {
      // dispatch(buyUserPackage(token, id));
    let Data = JSON.parse(localStorage.getItem("user")).name;
    let ID = JSON.parse(localStorage.getItem("user")).id;
    let packData = JSON.parse(localStorage.getItem("cart")).items.name;
    let prices = JSON.parse(localStorage.getItem("cart")).items.price;

    console.warn(packData);
    console.warn(prices);
    console.warn(Data);
    console.warn(ID);
    const formData = new FormData();
    formData.append('pid', packData);
    formData.append('studentid', Data);
    formData.append('student_id', ID);
    formData.append('amount', prices);
    formData.append('status', status);
    let result = await fetch("https://justconsult.org/medoc_api/api/v1/payment/", {
      
      method: 'POST',
      body: formData,
    });

    
      // history.push(`${process.env.PUBLIC_URL}/dashboard`);
    // } else {
      // history.push(`${process.env.PUBLIC_URL}/login?redirect=cart`);
    // }
  }
  return (
    <DashboardLayout>
      <section className='secc'>
        <div className='container'>
          {loading ? (
            <LottiesLoader />
          ) : items.length ? (
            <div className='row'>
              <div className='col-md-8'>
                <div className='dash-achiv p-3' style={{ borderRadius: 8 }}>
                  <Link to={`${process.env.PUBLIC_URL}/courses`}>
                    Add More Package
                  </Link>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, idx) => (
                        <tr key={item.id}>
                          <td>{idx + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.price.toFixed(2)}</td>
                          <td>
                            <Button
                              outline
                              color='danger'
                              size='sm'
                              onClick={() => removeFromCart(item.id)}
                            >
                              <i className='fa fa-times'></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='dash-achiv p-3' style={{ borderRadius: 8 }}>
                  <ListGroup flush>
                    <ListGroupItem>
                      <strong>Total:</strong> {calculateCartAmount()}
                    </ListGroupItem>
                  </ListGroup>
                  {/* onClick={()=>buyPackage(items)} */}
                  <Button color='info'  onClick= {()=>buyPackage(items)} >
                    Buy Packages
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <p className='text-center'>
              No Items in the cart{' '}
              <Link to={`${process.env.PUBLIC_URL}/courses`}>Shop Now</Link>
            </p>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Cart;
