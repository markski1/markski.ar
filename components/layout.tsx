import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Layout({ children, home=false }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta
					name="description"
					content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student."
				/>
				<meta name="og:title" content="markski.ar" />
				<meta property="og:image" content="https://markski.ar/images/profileDesplacement.png" />
				<meta property="og:description" content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student." />
			</Head>
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
