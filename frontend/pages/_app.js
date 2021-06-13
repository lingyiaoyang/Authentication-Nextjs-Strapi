import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import getConfig from 'next/config';
import 'bootstrap/dist/css/bootstrap.css';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import withAuth from './auth/withAuth';

//initial all props
const queryClient = new QueryClient();
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

// MyApp.getInitialProps = async ({ ctx }) => {
//   // const jwt = await parseCookies(ctx).jwt;
//   // return {
//   //   jwt,
//   // };
// };

export default MyApp;
