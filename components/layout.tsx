import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Layout({ children, home=false, func=function() {} }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta
					name="description"
					content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student."
				/>
				<meta name="og:title" content="markski.ar" />
			</Head>
			<body onLoad={func}>
				<div className={styles.container}>
				
				<header style={{textAlign: 'center'}}>
					<Link href="/">
						<a>
							<img
								style={{marginLeft: 'auto', marginRight: 'auto'}}
								src="/images/profile.png"
								width={144}
								height={144}
								alt="logo"
								/>
						</a>
					</Link>
				</header>
				<main style={{width: "95%", margin: "-2rem auto 0rem"}}>
					{children}
				</main>
				{!home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>
								<button className={utilStyles.button}>← Home</button>
							</a>
						</Link>
					</div>
				)}
				<div className={styles.footer}>
					<span>Markski 2012-{(new Date()).getFullYear()}</span>
				</div>
				</div>
			</body>
		</>
	);
}
