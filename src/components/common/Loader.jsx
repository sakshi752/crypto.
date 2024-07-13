import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white bg-opacity-75 fixed top-0 left-0 z-50">
      <CircularProgress sx={{ color: '#7a4191' }} />
    </div>
  );
}

export default Loader;
