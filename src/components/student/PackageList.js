import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPackages } from '../../actions';

function PackageList() {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);
  const { token, user } = authenticated;
  const { packages } = useSelector((state) => state.userPackages);

  useEffect(() => {
    dispatch(getUserPackages(token, user.id));
  }, [dispatch, token, user]);

  return (
    <div>
      <h2>Package List</h2>
      <ul>
        {packages.map((packAge) => (
          <li key={packAge.id}>
            <Link to={`my-packages/${packAge.id}/tests`}>{packAge.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageList;
