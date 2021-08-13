import React from 'react';
import { Spinner } from 'reactstrap';

function Loader() {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{ width: 80, height: 80, margin: 'auto', display: 'block' }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
}

export default Loader;
