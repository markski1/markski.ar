import * as React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { style } from '@mui/system';

export default function FirstPost() {
	let currency = 0;
	let province = 0;

	const changeCurrency = (event) => {
		currency = event.target.value;
	};

	const changeProvince = (event) => {
		province = event.target.value;
	};

	const calcular = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<Layout>
			<Head>
				<title>Calculadora de pagos al exterior - {siteTitle}</title>
				<meta
					name="description"
					content="Calculadora impuestos de pagos a Steam, Netflix, Spotify, Epic Games, etc."
				/>
				<meta name="og:title" content="Calculadora de pago a servicios del exterior - mrks.cf" />
			</Head>

			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Calculadora de pagos al exterior</p>
			</div>
			<center>
				<h3>Ingresa cuanto vas a cargar</h3>
			</center>
			
			<form method="POST">
				<Grid container spacing={2.5}>
					<Grid item xs>
						<select className={utilStyles.input} id="moneda">
							<option selected="selected" value={1}>AR$</option>
							<option value={2}>USD</option>
							<option value={3}>EUR</option>
							<option value={4}>BR$</option>
						</select>
						<input style={{marginTop: '20px'}} className={utilStyles.input} id="cantidad" placeholder="Cantidad $" type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" title="Numero con no mas de 2 decimales."></input>
					</Grid>
					<Grid item xs>
						<select className={utilStyles.input} id="pvcia">
							<option selected="selected" value={0}>Provincia</option>
							<option value={1}>Buenos Aires o CABA</option>
							<option value={2}>Chaco</option>
							<option value={3}>Cordoba</option>
							<option value={4}>La Pampa</option>
							<option value={5}>Rio Negro</option>
							<option value={6}>Salta</option>
							<option value={0}>Ninguna de las anteriores</option>
						</select>
						<input style={{marginTop: '20px'}} type="submit" className={utilStyles.button} id="botonAver" onclick="return calcular()" value="A ver Gaston"></input>
					</Grid>
				</Grid>
			</form>
			<center>
				<p className={utilStyles.heading2Xl}>$0,00</p>
			</center>
			<p className={utilStyles.headingLg}>En impuestos:</p>
			<p>
				<small>
					<ul>
						<li>IVA Servicios Digitales <span className={utilStyles.money}>AR$<span id="servdig">0,00</span></span> <b>(21%)</b></li>
						<li>Percepción impuesto RG AFIP 4815 <span className={utilStyles.money}>AR$<span id="afip">0,00</span></span> <b>(35%)</b></li>
						<li>Ley impuesto PAIS <span className={utilStyles.money}>AR$<span id="pais">0,00</span></span> <b>(8%)</b></li>
						<li>Impuestos provinciales <span className={utilStyles.money}>AR$<span id="pvc">0,00</span></span> <b>(<span id="impuestlol">?</span>%)</b></li>
					</ul>
				</small>
			</p>
		</Layout>
	);
}