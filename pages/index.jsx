import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function PrintEntry(props) {
	return (
		<div className={utilStyles.entry}>
			<p>
				<big>
				<Link href={props.url} >
					<a>{props.title}</a>
				</Link>
				</big>
				<br/>
				{props.text}
			</p>
		</div>
	);
}

let site = (
	<>
		<Head>
			<title>Home - mrks.cf</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/v4-font-face.min.css" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
		</Head>
		<section className={utilStyles.headingMd}>
			<p>I'm Markski. A computer science student and programmer from Argentina.</p>
		</section><div className={utilStyles.contactCard}>
			<Grid container columnSpacing={7}>
				<Grid item xs>
					<section xs className={utilStyles.headingMd}>
						Get in touch:
					</section>
					<span style={{ fontFamily: 'FontAwesome' }} class="fa fa-telegram"></span> <a style={{ color: 'white' }} href="https://www.telegram.me/Markski">Markski</a><br />
					<span style={{ fontFamily: 'FontAwesome', fontSize: '0.8rem' }} class="fa fa-discord"></span> <a style={{ color: 'white' }}>Markski#7243</a>
				</Grid>
				<Grid item xs>
					<span style={{ fontFamily: 'FontAwesome' }} class="fa fa-github"></span> <a style={{ color: 'white' }} href="https://www.github.com/markski1">markski1</a><br />
					<span style={{ fontFamily: 'FontAwesome' }} class="fa fa-twitter"></span> <a style={{ color: 'white' }} href="https://www.twitter.com/a_markski">a_markski</a><br />
					<span style={{ fontFamily: 'FontAwesome' }} class="fa fa-steam"></span> <a style={{ color: 'white' }} href="https://www.steamcommunity.com/id/Markski">Markski</a><br />
					<span style={{ fontFamily: 'FontAwesome' }} class="fa fa-envelope"></span> <a style={{ color: 'white' }}>immarkski@proton.me</a>
				</Grid>
			</Grid>
		</div>
		<div className={utilStyles.headingContainer}>
			<p className={utilStyles.headingLg}>Tools and Services</p>
		</div>
		<PrintEntry
			title = '[Spanish] Calculadora de pagos al exterior'
			url = 'calc'
			text = 'Calcula el costo total con impuestos de pagos a Steam, Netflix, etc.'
		/>
		<hr />
		<PrintEntry
			title = '[Spanish] Prueba de Punteria'
			url = 'https://old.mrks.cf/punteria'
			text = 'Una simple prueba de punteria y velocidad con el puntero.'
		/>
		<hr />
		<PrintEntry
			title = '[Spanish] Simplificador de texto para CSGO'
			url = 'simplecsgo'
			text = 'Simplifica los textos del chat en CSGO.'
		/>
		<hr />
		<PrintEntry
			title = 'Rosettes'
			url = 'rosettes'
			text = 'A simple, free to use, open source Discord bot.'
		/>
		<hr />
		<PrintEntry
			title = 'CSGO Sensitivity Converter'
			url = 'https://old.mrks.cf/csgosens'
			text = "A tool which allows to keep your perceived sensitivity if you\'re changing certain parameters in CSGO."
		/>
		<hr />
		<PrintEntry
			title = 'Nintendo Graveyard'
			url = 'https://old.mrks.cf/nintendont'
			text = 'A list of services and events terminated by Nintendo.'
		/>
		<div className={utilStyles.headingContainer}>
			<p className={utilStyles.headingLg}>Documentation</p>
		</div>
		<PrintEntry
			title = 'SA-MP Weapon statistics'
			url = 'https://old.mrks.cf/SA-MP_Weapons'
			text = 'Comprehensive table of statistics for most weapons available in SA-MP.'
		/>
		<hr />
		<PrintEntry
			title = 'SA-MP Explosion data'
			url = 'https://old.mrks.cf/SA-MP_Explosions'
			text = 'Comprehensive-ish table of evidence-based qualifications for all the explosions you can use in SA-MP.'
		/>
		<div className={utilStyles.headingContainer}>
			<p className={utilStyles.headingLg}>Software and Libraries</p>
		</div>
		<PrintEntry
			title = 'PSXU'
			url = 'https://github.com/markski1/PSXU'
			text = 'PSXU is a single-file PHP script to upload files on your webserver through Sharex for quick sharing.'
		/>
		<hr />
		<PrintEntry
			title = 'tireFuncs'
			url = 'https://github.com/markski1/SAMP-tireFuncs'
			text = 'Provides functions and callbacks for easily handling vehicle tires in SA-MP.'
		/>
		<hr />
		<PrintEntry
			title = 'vModData'
			url = 'https://github.com/markski1/SAMP-tireFuncs'
			text = 'Library to obtain information about vehicle components in SA-MP.'
		/>
		<hr />
		<PrintEntry
			title = '3dspeed'
			url = 'https://github.com/markski1/SAMP-3dspeed'
			text = 'An easy to implement 3D Speedometer for your SA-MP server which exists in the game world itself.'
		/>
		<hr />
		<PrintEntry
			title = 'surf-callbacks'
			url = 'https://github.com/markski1/samp-surf-callbacks'
			text = 'Provides callbacks for certain scenarios where a player surfs or stops surfing a vehicle.'
		/>
		<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
			<p>Everything in this website is free to use.<br/>
			If you find something useful, please consider supporting my work with a <Link href="/donate"><a style={{color: 'cyan'}}>donation</a></Link>.</p>
		</div>
	</>
);

export default function Home() {
	return <Layout home> {site} </Layout>;
}