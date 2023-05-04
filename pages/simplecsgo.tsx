import * as React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Header from '../components/atoms/PageHeader';
import Section from '../components/molecules/Section';
import HeadParams from '../components/atoms/HeadParams';

export default function Page() {
	return (
		<>
		<HeadParams
			title = "Chat simple para CS:GO"
			description = "Modificación para CSGO que simplifica los elementos del chat."
		/>
		<Layout type='page'>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Chat simple para CS:GO</p>
			</Header>
			<Section title="como se ve">
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
			</Section>
			<Section title="como instalarlo">
				<ul style={{listStyleType: 'square'}}>
					<li><p>Descargar el mod haciendo <a href="https://snep.markski.ar/WwjK.7z">click acá</a>.</p></li>
					<li><p>Copiar csgo_simplespanish.txt dentro del comprimido, y pegarlo en la carpeta:<br/>Steam <b>&gt;</b> steamapps <b>&gt;</b> Counter-Strike Global Offensive <b>&gt;</b> csgo <b>&gt;</b> resource</p></li>
					<li><p>En Steam, click derecho en CSGO, propiedades, y en opciones de lanzamiento:<br/><b>'-novid -nojoy -language spanishsimple'</b> sin comillas.</p></li>
				</ul>
			</Section>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}></p>
			</div>
			<Section title="aviso y creditos">
				<p>Este mod se instala como si fuera un lenguaje alternativo. No hace nada que CSGO no permita. No va a causar bans de VAC, Faceit ni GC.</p>
				<p>Este mod es una versión en español del mod disponible haciendo <a data-class="link" href="https://gamebanana.com/mods/38438">click acá</a></p>
			</Section>
		</Layout>
		</>
	);
}