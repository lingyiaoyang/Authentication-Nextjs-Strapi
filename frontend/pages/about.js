import React from 'react';
import withAuth from './auth/withAuth';

function about() {
  return <div>this is about route</div>;
}

export default withAuth(about);
