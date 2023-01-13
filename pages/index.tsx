import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import PrintEntry from '../components/HomeComps/HomeEntry'
import GetIcon from '../components/HomeComps/Icons';

export default function Home() {
	return (
		<>
		<Head>
			<title>Home - markski.ar</title>
			<meta
				name="description"
				content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student."
			/>
			<meta name="og:title" content="markski.ar" />
			<meta property="og:description" content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student." />
			<meta property="og:image" content="https://markski.ar/images/profileDesplacement.png" />
		</Head>
		<Layout home>
			
			<div className={utilStyles.contactCard}>
				<Grid container columnSpacing={4} rowSpacing={3}>
					<Grid item xs={7}>
						<div style={{whiteSpace: 'pre-line', minWidth: '17rem'}}>
							<p>I study Computer Science in the UNLP, and currently work as a freelancer.<br/>&nbsp;<br/>
							Always interested in work and opportunities.<br/>Get in touch!</p>
						</div>
					</Grid>
					<Grid item xs>
						<div style={{minWidth: '10rem', marginTop: '.5rem'}}>
							<GetIcon icon="github" /> <a className={utilStyles.contactLink} href="https://www.github.com/markski1">GitHub</a><br />
							<GetIcon icon="twitter" /> <a className={utilStyles.contactLink} href="https://www.twitter.com/a_markski">Twitter</a><br />
							<GetIcon icon="telegram" /> <a className={utilStyles.contactLink} href="https://www.telegram.me/Markski">Telegram</a><br />
							<GetIcon icon="discord" /> <a className={utilStyles.contactLink} href="discord:Markski#7243">Discord</a><br />
							<GetIcon icon="email" /> <a className={utilStyles.contactLink} href="mailto:immarkski@proton.me">immarkski@proton.me</a>
						</div>
					</Grid>
				</Grid>
			</div>
			<div className={utilStyles.headingContainer}>
				<h2 className={utilStyles.headingLg}>software and services</h2>
			</div>
			<PrintEntry
				title = 'Rosettes'
				url = 'rosettes'
				text = 'simple, free, open source discord bot.'
			/>
			<PrintEntry
				title = 'WTTk'
				url = 'wttk'
				text = 'the windows tweaking toolkit allows tweaking hidden windows settings.'
			/>
			<PrintEntry
				title = 'Argentine exterior tax calculator'
				url = 'calc'
				text = 'calculate costs of payments from argentina to foreign services such as steam'
				spanishOnly
			/>
			<PrintEntry
				title = 'CS:GO Text simplifier'
				url = 'simplecsgo'
				text = 'simplifies the in-game chat texts in counter-strike: global offensive.'
				spanishOnly
			/>
			<div className={utilStyles.headingContainer}>
				<h2 className={utilStyles.headingLg}>repositories and libraries</h2>
			</div>
			<PrintEntry
				title = 'PSXU'
				url = 'https://github.com/markski1/PSXU'
				text = 'single-file PHP script to upload files on your webserver through Sharex for quick sharing.'
				target = '_blank'
			/>
			<PrintEntry
				title = 'tireFuncs'
				url = 'https://github.com/markski1/SAMP-tireFuncs'
				text = 'functions and callbacks for easily handling vehicle tires in SA-MP.'
				target = '_blank'
			/>
			<PrintEntry
				title = 'vModData'
				url = 'https://github.com/markski1/SAMP-vModData'
				text = 'library to obtain information about vehicle components in SA-MP.'
				target = '_blank'
			/>
			<PrintEntry
				title = '3dspeed'
				url = 'https://github.com/markski1/SAMP-3dspeed'
				text = 'easy to implement Speedometer for SA-MP server which floats in the physical game world.'
				target = '_blank'
			/>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>everything in this website is free to use.<br/>
				if you find something useful, please consider supporting my work with a <Link href="/donate"><span style={{color: 'cyan'}}>donation</span></Link>.</p>
			</div>
		</Layout>
		</>
	);
}