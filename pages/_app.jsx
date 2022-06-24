import '../styles/global.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const isProd = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = url => {
			if (isProd) {
				window.gtag('config', 'G-7WFE9MRKS5', {
					page_path: url,
				});
			}
		}
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		}
  	}, [router.events]);
	return <Component {...pageProps} />;
}