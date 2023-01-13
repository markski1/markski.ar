import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Header from '../components/molecules/PageHeader';
import SectorContainer from '../components/molecules/SectorContainer';

export default function Page() {
	return (
		<>
		<Head>
			<title>Chat simple para CS:GO - markski.ar</title>
			<meta
				name="description"
				content="Modificación para CSGO que simplifica los elementos del chat."
			/>
			<meta name="og:title" content="Chat simple para CSGO - markski.ar" />
			<meta property="og:image" content="https://markski.ar/images/profileDesplacement.png" />
			<meta property="og:description" content="Desarrollador, estudiante de informatica. / Developer, Comp Sci student." />
		</Head>
		<Layout>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Chat simple para CS:GO</p>
			</Header>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>como se ve</p>
			</div>
			<SectorContainer>
				<p>Los rangos tienen un numero indicando progreso:</p>
				<img width={387} height={107} src="./images/csgo/rango.png"/>
				<p>Los textos de kill y granada son mas simples:</p>
				<img width={198} height={64} src="./images/csgo/kill.png"/>
				<img width={284} height={107} src="./images/csgo/granadas.png"/>
				<p>Los textos de daños dado y recibido son mas sencillos:</p>
				<img width={188} height={62} src="./images/csgo/daño.png"/>
				<p>Ademas:</p>
				<ul>
					<li>Texto como "negativo/positivo" se cambia a "si/no"</li>
					<li>Los estados de skin tienen la denominación de dos letras (FN, FT, etc)</li>
					<li>Otras cosas xd</li>
				</ul>
			</SectorContainer>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>como instalarlo</p>
			</div>
			<SectorContainer>
				<ul style={{listStyleType: 'square'}}>
					<li><p>Descargar el mod haciendo <a href="https://snep.markski.ar/WwjK.7z">click acá</a>.</p></li>
					<li><p>Copiar csgo_simplespanish.txt dentro del comprimido, y pegarlo en la carpeta:<br/>Steam <b>&gt;</b> steamapps <b>&gt;</b> Counter-Strike Global Offensive <b>&gt;</b> csgo <b>&gt;</b> resource</p></li>
					<li><p>En Steam, click derecho en CSGO, propiedades, y en opciones de lanzamiento:<br/><b>'-novid -nojoy -language spanishsimple'</b> sin comillas.</p></li>
				</ul>
			</SectorContainer>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>aviso y creditos</p>
			</div>
			<SectorContainer>
				<p>Este mod se instala como si fuera un lenguaje alternativo. No hace nada que CSGO no permita. No va a causar bans de VAC, Faceit ni GC.</p>
				<p>Este mod es una versión en español del mod disponible haciendo <a data-class="link" href="https://gamebanana.com/mods/38438">click acá</a></p>
			</SectorContainer>
		</Layout>
		</>
	);
}