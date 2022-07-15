import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';

export default function Page() {
	let pvcPorcentaje: number[];
	//               N/A  CABA  CHACO  CRDB  LPMP  NEUQ  RNGR  SALTA
	pvcPorcentaje = [0.0, 0.02, 0.055, 0.03, 0.01, 0.03, 0.05, 0.036];
	
	let values: { eur: number; usd: number; brs: number; };

	async function setearMonedas() {
		let response = await fetch("https://snep.markski.ar/monedas.php");
		values = await response.json();

		document.getElementById("domEUR").innerHTML = values.eur.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("domUSD").innerHTML = values.usd.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("domBRS").innerHTML = values.brs.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
	}

	function calcular(e: { preventDefault: () => any; }) {
		var cantidad = +((document.getElementById('cantidad') as HTMLInputElement).value);
		var moneda = +((document.getElementById('moneda') as HTMLInputElement).value);
		var pvcia = +((document.getElementById('pvcia') as HTMLInputElement).value);

		if (!isNumeric(cantidad)) {
			alert("Valor no valido. Cualquier numero con el decimal marcado con punto o coma.");
			return e.preventDefault();
		}

		if (cantidad < 0) {
			alert("Por favor ingresa una cantidad mayor a 0");
			return e.preventDefault();
		}

		if (moneda == 2) {
			cantidad *= values.usd;
		}
		if (moneda == 3) {
			cantidad *= values.eur;
		}
		if (moneda == 4) {
			cantidad *= values.brs;
		}

		// Chequeamos de vuelta si menor que 0. ¿Por que?
		// Porque cuando una conversión no esta funcionando, aparece como -1, por lo tanto arriba se torna a negativo.
		if (cantidad < 0) {
			alert("Perdón, pero esa conversión actualmente no esta funcionando.");
			return e.preventDefault();
		}

		var servdig = cantidad * 0.21;
		servdig = cantidad * 0.21;
		var afip = cantidad * 0.45;
		var pais = cantidad * 0.08;
		var pvc = 0.0;
		pvc = cantidad * pvcPorcentaje[pvcia];
		document.getElementById("impuestlol").innerHTML = (pvcPorcentaje[pvcia] * 100).toFixed(1);
		var totalImpuestos = servdig + afip + pais + pvc;
		var total = cantidad + totalImpuestos;
		

		document.getElementById("total").innerHTML = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("servdig").innerHTML = servdig.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("afip").innerHTML = afip.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("pais").innerHTML = pais.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("pvc").innerHTML = pvc.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		document.getElementById("totalImpuestos").innerHTML = totalImpuestos.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
		return e.preventDefault();
	}
	function isNumeric(n: any) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	return (
		<>
		<Layout func={setearMonedas}>
			<Head>
				<title>Calculadora de pagos al exterior Argentina - markski.ar</title>
				<meta
					name="description"
					content="Calcula impuestos de pagos a Steam, Netflix, Spotify, Epic Games, etc."
				/>
				<meta property="og:title" content="Calculadora de pagos al exterior Argentina" />
				<meta property="og:description" content="Calcula impuestos de pagos al exterior, Steam, Netflix, Spotify, Epic Games, etc." />
			</Head>

			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Calculadora de pagos al exterior</p>
			</div>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>Ingresa cuanto vas a cargar</p>
			</div>
			
			<form onSubmit={(calcular)}>
				<Grid container spacing={2.5}>
					<Grid item xs>
						<select defaultValue={1} className={utilStyles.input} id="moneda">
							<option value={1}>AR$</option>
							<option value={2}>USD</option>
							<option value={3}>EUR</option>
							<option value={4}>BR$</option>
						</select>
						<input style={{marginTop: '20px'}} className={utilStyles.input} id="cantidad" placeholder="Cantidad $" type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" title="Numero con no mas de 2 decimales." />
					</Grid>
					<Grid item xs>
						<select defaultValue={0} className={utilStyles.input} id="pvcia">
							<option value={0}>Provincia</option>
							<option value={1}>Buenos Aires o CABA</option>
							<option value={2}>Chaco</option>
							<option value={3}>Cordoba</option>
							<option value={4}>La Pampa</option>
							<option value={5}>Neuquén</option>
							<option value={6}>Rio Negro</option>
							<option value={7}>Salta</option>
							<option value={0}>Ninguna de las anteriores</option>
						</select>
						<input style={{marginTop: '20px'}} type="submit" className={utilStyles.button} value="Calcular" />
					</Grid>
				</Grid>
			</form>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.heading2Xl}>AR$<span id="total">0,00</span></p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p className={utilStyles.headingLg}>En impuestos: <span className={utilStyles.money}>AR$<span id="totalImpuestos"></span></span></p>
				<small>
					<ul>
						<li>IVA Servicios Digitales <span className={utilStyles.money}>AR$<span id="servdig">0,00</span></span> <b>(21%)</b></li>
						<li>Percepción impuesto RG AFIP 4815 <span className={utilStyles.money}>AR$<span id="afip">0,00</span></span> <b>(45%)</b></li>
						<li>Ley impuesto PAIS <span className={utilStyles.money}>AR$<span id="pais">0,00</span></span> <b>(8%)</b></li>
						<li>Impuestos provinciales <span className={utilStyles.money}>AR$<span id="pvc">0,00</span></span> <b>(<span id="impuestlol">?</span>%)</b></li>
					</ul>
					<p>Para mas información, leér <a className={utilStyles.money} href="https://www.mercadopago.com.ar/ayuda/pagos-en-moneda-extranjera_4063">este documento</a>. (No aplica solo a mercadopago)</p>
				</small>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p className={utilStyles.headingLg}>Conversiónes actuales:</p>
				<small>
					<ul>
						<li>USD: <span className={utilStyles.money} id="domUSD"></span></li>
						<li>EUR: <span className={utilStyles.money} id="domEUR"></span></li>
						<li>BRS: <span className={utilStyles.money} id="domBRS"></span></li>
					</ul>
				</small>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>Si te sirve la herramienta y tenes ganas, podes colaborar:</p>
				<small>
					<ul>
						<li>Por Mercado Pago: A traves de <a href="https://www.cafecito.app/Markski" className={utilStyles.money}>Cafecito</a></li>
						<li>Por CBU/CVU: <span className={utilStyles.money}>0000003100011560441592</span> | Alias: <span className={utilStyles.money}>markski</span></li>
					</ul>
				</small>
			</div>
		</Layout>
		</>
	);
}