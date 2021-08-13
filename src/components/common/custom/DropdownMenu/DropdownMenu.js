import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [name, setName] = useState('User');

  const { authenticated } = useSelector((state) => state.auth);
  const { user } = authenticated;

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  return (
    <div className='menu-container'>
      <button onClick={onClick} className='menu-trigger'>
        <span>{name}</span>
        <img
          src={`https://ui-avatars.com/api/?name=${name}&size=32&length=1&background=D3FBF5&rounded=true`}
          alt='user avatar'
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/cart`}>My Cart</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/logout`}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DropdownMenu;
