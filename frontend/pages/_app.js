import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import getConfig from 'next/config';
import 'bootstrap/dist/css/bootstrap.css';

//initial all props
const queryClient = new QueryClient();
const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps, article }) {
  console.log('🚀 -> file: _app.js -> line 11 -> MyApp -> article', article);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/articles`);
  const article = await res.json();

  return {
    props: {
      article: article,
    },
  };
};

export default MyApp;
