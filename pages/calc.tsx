import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';
import Header from '../components/molecules/header';
import SectorContainer from '../components/molecules/SectorContainer';

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
		var cantidad = parseFloat((document.getElementById('cantidad') as HTMLInputElement).value);
		var moneda = parseInt((document.getElementById('moneda') as HTMLInputElement).value);
		var pvcia = parseInt((document.getElementById('pvcia') as HTMLInputElement).value);

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

		document.getElementById("totalCompra").innerHTML = cantidad.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

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

			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Calculadora de pagos al exterior</p>
			</Header>
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
				<p className={utilStyles.heading2Xl}>Total: AR$<span id="total" style={{fontWeight: '600'}}>0,00</span></p>
			</div>
			<SectorContainer>
				<Grid container columnSpacing={4}>
					<Grid item>
						<div style={{whiteSpace: 'pre-line', minWidth: '20rem'}}>
							<p className={utilStyles.headingLg}>En la compra: <span className={utilStyles.money}>AR$<span id="totalCompra">0,00</span></span><br />
							En impuestos: <span className={utilStyles.money}>AR$<span id="totalImpuestos">0,00</span></span></p>
							<small>
								<ul>
									<li>IVA Servicios Digitales <span className={utilStyles.money}>AR$<span id="servdig">0,00</span></span> <b>(21%)</b></li>
									<li>Percepción imp. RG AFIP 4815 <span className={utilStyles.money}>AR$<span id="afip">0,00</span></span> <b>(45%)</b></li>
									<li>Ley impuesto PAIS <span className={utilStyles.money}>AR$<span id="pais">0,00</span></span> <b>(8%)</b></li>
									<li>Impuestos provinciales <span className={utilStyles.money}>AR$<span id="pvc">0,00</span></span> <b>(<span id="impuestlol">?</span>%)</b></li>
								</ul>
							</small>
						</div>
					</Grid>
					<Grid item xs={4}>
						<div style={{whiteSpace: 'pre-line', minWidth: '10rem'}}>
							<p className={utilStyles.headingLg}>Conversiónes:</p>
							<small>
								<ul>
									<li>1 USD = <span className={utilStyles.money} id="domUSD"></span></li>
									<li>1 EUR = <span className={utilStyles.money} id="domEUR"></span></li>
									<li>1 BRS = <span className={utilStyles.money} id="domBRS"></span></li>
								</ul>
							</small>
						</div>
					</Grid>
				</Grid>
			</SectorContainer>

			<SectorContainer>
				<p>Si te sirve la herramienta y tenes ganas, podes colaborar:</p>
				<small>
					<ul>
						<li>Por Mercado Pago: A traves de <a href="https://www.cafecito.app/Markski" className={utilStyles.money}>Cafecito</a></li>
						<li>Por CBU: <span className={utilStyles.money}>0110337130033713474751</span> o al alias <span className={utilStyles.money}>markski</span></li>
					</ul>
				</small>
			</SectorContainer>
		</Layout>
		</>
	);
}