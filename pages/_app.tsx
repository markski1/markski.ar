import '../styles/global.css';
import { AppProps } from 'next/app';
import Transition from '../components/Transition';
import '../styles/transition.css';
import Header from '../components/molecules/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}

export default App;
