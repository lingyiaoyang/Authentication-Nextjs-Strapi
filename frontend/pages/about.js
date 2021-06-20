import React from 'react';
import withAuth from './auth/withAuth';
import jwt_decode from 'jwt-decode';

function about() {
  const accessToken = localStorage.getItem('jwt');
  const decoded = jwt_decode(accessToken);
  console.log('🚀 -> file: about.js -> line 8 -> about -> decoded', decoded);

  const decodedHeader = jwt_decode(accessToken, { header: true });
  console.log(
    '🚀 -> file: about.js -> line 12 -> about -> decodedHeader',
    decodedHeader
  );
  return <div>this is about route</div>;
}

export default withAuth(about);
