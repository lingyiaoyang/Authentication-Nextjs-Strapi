// HOC/withAuth.jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import verifyToken from 'services/verifyToken';
import jwt_decode from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem('jwt');

      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace('/auth/login');
      } else {
        // we call the api that verifies the token.

        const accessToken = localStorage.getItem('jwt');

        // if token was verified we set the state.
        if (decodedHeader.verified) {
          setVerified(data.verified);
        } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem('jwt');
          Router.replace('/auth/login');
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
