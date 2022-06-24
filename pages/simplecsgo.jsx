import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Page() {
	return (
		<>
		<Layout>
			<Head>
				<title>Chat simple para CSGO - mrks.cf</title>
				<meta
					name="description"
					content="Modificación para CSGO que simplifica los elementos del chat."
				/>
				<meta name="og:title" content="Chat simple para CSGO - mrks.cf" />
			</Head>

			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Chat simple para CSGO</p>
			</div>
			<center>
				<p className={utilStyles.headingLg}>Como se ve</p>
			</center>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>Los rangos tienen un numero indicando progreso:</p>
				<img style={{padding: '10px'}} src="./images/csgo/rango.png"/>
				<p>Los textos de kill y granada son mas simples:</p>
				<img style={{padding: '10px'}} src="./images/csgo/kill.png"/>
				<img style={{padding: '10px'}} src="./images/csgo/granadas.png"/>
				<p>Los textos de daños dado y recibido son mas sencillos:</p>
				<img style={{padding: '10px'}} src="./images/csgo/daño.png"/>
				<p>Ademas:</p>
				<ul>
					<li>Texto como "negativo/positivo" se cambia a "si/no"</li>
					<li>Los estados de skin tienen la denominación de dos letras (FN, FT, etc)</li>
					<li>Otras cosas xd</li>
				</ul>
			</div>
			<center>
				<p className={utilStyles.headingLg}>Como instalarlo</p>
			</center>
			<div className={utilStyles.headingContainer} style={{padding: '10px'}}>
				<ul style={{listStyleType: 'square'}}>
					<li><p>Descargar el mod haciendo <a href="https://snep.mrks.cf/WwjK.7z">click acá</a>.</p></li>
					<li><p>Copiar csgo_simplespanish.txt dentro del comprimido, y pegarlo en la carpeta:<br/>Steam <b>&gt;</b> steamapps <b>&gt;</b> Counter-Strike Global Offensive <b>&gt;</b> csgo <b>&gt;</b> resource</p></li>
					<li><p>En Steam, click derecho en CSGO, propiedades, y en opciones de lanzamiento:<br/><b>'-novid -nojoy -language spanishsimple'</b> sin comillas.</p></li>
				</ul>
			</div>
			<center>
				<p className={utilStyles.headingLg}>Aviso y creditos</p>
			</center>
			<div className={utilStyles.headingContainer} style={{padding: '10px 40px'}}>
				<p>Este mod se instala como si fuera un lenguaje alternativo. No hace nada que CSGO no permita. No va a causar bans de VAC, Faceit ni GC.</p>
				<p>Este mod es una versión en español del mod disponible haciendo <a class="link" href="https://gamebanana.com/mods/38438">click acá</a></p>
			</div>
		</Layout>
		</>
	);
}