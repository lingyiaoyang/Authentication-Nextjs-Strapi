import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import getConfig from 'next/config';
import { Provider } from 'next-auth/client';
import 'bootstrap/dist/css/bootstrap.css';

//initial all props
const queryClient = new QueryClient();
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
