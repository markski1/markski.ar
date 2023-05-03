import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Layout({ children, home=false, bgColor='#311d46' }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<style jsx global>{`
			body {
				background-color: ${bgColor};
			}
			#logo_p1 {
				fill: ${bgColor};
			}
			#logo_p2 {
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
