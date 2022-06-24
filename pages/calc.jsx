import * as React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';
import Script from 'next/script'

export default function FirstPost() {
	let pvcPorcentaje;
	//               N/A  CABA  CHACO  CRDB  LPMP  RNGR  SALTA
	pvcPorcentaje = [0.0, 0.02, 0.055, 0.03, 0.01, 0.05, 0.036];
	let AverGarray = ["Gaston", "Gabriel", "Gaetan", "Galileo", "Gandalf", "Galvin", "Garfield", "Garrison", "Gaspar", "Galicia", "Gabino", "Gaudencio"];
	
	let eur = 0;
	let usd = 0;
	let brs = 0;

	function setearMonedas() {
		alert("Ejecutado");
		let infoMonedas = fetch('https://snep.mrks.cf/monedas.php');
		let respuesta = JSON.parse(infoMonedas.text());
		let eur = respuesta.eur;
		let usd = respuesta.usd;
		let brs = respuesta.brs;
		
		document.getElementById("domEUR").innerHTML = eur.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("domUSD").innerHTML = usd.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("domBRS").innerHTML = brs.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
	}

	function calcular() {
		var cantidad = document.getElementById('cantidad').value;
		var moneda = document.getElementById('moneda').value;
		var pvcia = document.getElementById('pvcia').value;

		if (!isNumeric(cantidad)) {
			alert("Valor no valido. Cualquier numero con el decimal marcado con punto o coma.");
			return false;
		}

		cantidad = +(cantidad);
		pvcia = +(pvcia);

		if (cantidad < 0) {
			alert("Por favor ingresa una cantidad mayor a 0");
			return false;
		}

		// Un script PHP actualiza estos valores cada 5 horas
		if (moneda == 2) {
			cantidad *= 1.4;
		}
		if (moneda == 3) {
			cantidad *= 1.5;
		}
		if (moneda == 4) {
			cantidad *= 2;
		}

		// Chequeamos de vuelta si menor que 0. ¿Por que?
		// Porque cuando una conversión no esta funcionando, aparece como -1, por lo tanto arriba se torna a negativo.
		if (cantidad < 0) {
			alert("Perdón, pero esa conversión actualmente no esta funcionando.");
			return false;
		}

		var servdig = cantidad * 0.21;
		servdig = cantidad * 0.21;
		var afip = cantidad * 0.35;
		var pais = cantidad * 0.08;
		var pvc = 0.0;
		pvc = cantidad * pvcPorcentaje[pvcia];
		document.getElementById("impuestlol").innerHTML = (pvcPorcentaje[pvcia] * 100).toFixed(1);
		var porcentajeTotalImpuestos = 64 + (pvcPorcentaje[pvcia] * 100);
		var totalImpuestos = servdig + afip + pais + pvc;
		var total = cantidad + totalImpuestos;

		document.getElementById("total").innerHTML = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("servdig").innerHTML = servdig.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("afip").innerHTML = afip.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("pais").innerHTML = pais.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("pvc").innerHTML = pvc.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("totalImpuestos").innerHTML = totalImpuestos.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		// A ver...
		document.getElementById("botonAver").setAttribute("value", "A ver " + AverGarray[getRandomInt(AverGarray.length)]);
		return false;
	}
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	return (
		<>
		<Layout func={setearMonedas}>
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
				<p>
					<small>
						USD: <span className={utilStyles.money} id="domUSD"></span><br/>
						EUR: <span className={utilStyles.money} id="domEUR"></span><br/>
						BRS: <span className={utilStyles.money} id="domBRS"></span><br/>
					</small>
				</p>
			</div>
			<center>
				<h3>Ingresa cuanto vas a cargar</h3>
			</center>
			
			<form method="POST">
				<Grid container spacing={2.5}>
					<Grid item xs>
						<select defaultValue={1} className={utilStyles.input} id="moneda">
							<option value={1}>AR$</option>
							<option value={2}>USD</option>
							<option value={3}>EUR</option>
							<option value={4}>BR$</option>
						</select>
						<input style={{marginTop: '20px'}} className={utilStyles.input} id="cantidad" placeholder="Cantidad $" type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" title="Numero con no mas de 2 decimales."></input>
					</Grid>
					<Grid item xs>
						<select defaultValue={0} className={utilStyles.input} id="pvcia">
							<option  value={0}>Provincia</option>
							<option value={1}>Buenos Aires o CABA</option>
							<option value={2}>Chaco</option>
							<option value={3}>Cordoba</option>
							<option value={4}>La Pampa</option>
							<option value={5}>Rio Negro</option>
							<option value={6}>Salta</option>
							<option value={0}>Ninguna de las anteriores</option>
						</select>
						<input style={{marginTop: '20px'}} type="button" className={utilStyles.button} id="botonAver" onClick={calcular} value="A ver Gaston"></input>
					</Grid>
				</Grid>
			</form>
			<center>
				<p className={utilStyles.heading2Xl}>AR$<span id="total">0,00</span></p>
			</center>
			<p className={utilStyles.headingLg}>En impuestos: <span className={utilStyles.money}>AR$<span id="totalImpuestos"></span></span></p>
			<small>
				<ul>
					<li>IVA Servicios Digitales <span className={utilStyles.money}>AR$<span id="servdig">0,00</span></span> <b>(21%)</b></li>
					<li>Percepción impuesto RG AFIP 4815 <span className={utilStyles.money}>AR$<span id="afip">0,00</span></span> <b>(35%)</b></li>
					<li>Ley impuesto PAIS <span className={utilStyles.money}>AR$<span id="pais">0,00</span></span> <b>(8%)</b></li>
					<li>Impuestos provinciales <span className={utilStyles.money}>AR$<span id="pvc">0,00</span></span> <b>(<span id="impuestlol">?</span>%)</b></li>
				</ul>
			</small>
		</Layout>
		</>
	);
}