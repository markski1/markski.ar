import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'mrks.cf';

export default function Layout({ children, home, func }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta
					name="description"
					content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student."
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			<body onLoad={func}>
				<div className={styles.container}>
				
				<header style={{textAlign: 'center'}}>
					<img
						style={{marginLeft: 'auto', marginRight: 'auto'}}
						src="/images/profile.png"
						width={144}
						height={144}
						/>
				</header>
				<main style={{width: "95%", margin: "-2rem auto 0rem"}}>
					{children}
				</main>
				{!home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Home</a>
						</Link>
					</div>
				)}
				<div className={styles.footer}>
					<a href="https://mynickname.com/markski">
						<img src="/images/nickname.gif" style={{marginLeft: 'auto', marginRight: 'auto'}} width={350} height={19} />
					</a>
					<p>Markski 2012-{(new Date()).getFullYear()}</p>
				</div>
				</div>
			</body>
		</>
	);
}
