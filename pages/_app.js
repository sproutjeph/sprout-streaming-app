import { Provider } from 'next-auth/client';
import '../styles/global.css';
import { AppProvider } from '../store/context';
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}

export default MyApp;
