import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Layout({ children, home=false, type='none' }) {
	let bgColor = "#191B45";
	switch (type) {
		case 'page':
			bgColor = '#1C315C';
			break;
		case 'blog':
			bgColor = '#153145';
			break;
	}
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<style jsx global>{`
			body {
				background-color: ${bgColor};
			}
			#logo {
				fill: ${bgColor};
			}
			`}</style>
			<div className={styles.container}>
				<main style={{width: "98%", margin: "-2rem auto"}}>
					{children}
				</main>
				{!home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<button className={utilStyles.button}>← Home</button>
						</Link>
					</div>
				)}
				<div className={styles.footer}>
					<span>Markski 2012-{(new Date()).getFullYear()}</span>
				</div>
			</div>
		</>
	);
}
