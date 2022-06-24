import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

export const siteTitle = 'mrks.cf';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta
					name="description"
					content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student."
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			<header style={{textAlign: 'center'}}>
				<Image
					priority
					src="/images/profile.png"
					className={styles.logo}
					height={144}
					width={144}
					/>
			</header>
			<main style={{width: "95%", margin: "-2rem auto 0rem"}}>
				{children}
			</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<div className={styles.footer}>
				<a href="https://mynickname.com/markski">
					<Image src="/images/nickname.gif" width= {350} height={19	} />
				</a>
				<p>Markski 2012-{(new Date()).getFullYear()}</p>
			</div>
		</div>
	);
}
