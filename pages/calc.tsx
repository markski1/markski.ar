import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';
import Header from '../components/molecules/PageHeader';
import SectorContainer from '../components/molecules/SectorContainer';

export default function Page() {
	let pvcPorcentaje: number[];
	//               N/A  CABA  CHACO  CRDB  LPMP  NEUQ  RNGR  SALTA
	pvcPorcentaje = [0.0, 0.02, 0.055, 0.03, 0.01, 0.03, 0.05, 0.036];

	let values: { eur: number; usd: number; brs: number; };

	var obtenidos = false;

	async function setearMonedas() {
		let response = await fetch("https://snep.markski.ar/monedas.php");
		values = await response.json();

		obtenidos = true;
		return true;
	}

	function calcularTrigger(e: { preventDefault: () => any; }) {
		// se llama a traves de esta funcion trigger para que no se recargue la pagina.
		// la solucion real seria re-escribir esto como un hook, pero no tengo tiempo.
		calcular(e);
		return e.preventDefault();
	}

	async function calcular(e: { preventDefault: () => any; }) {
		var cantidad = parseFloat((document.getElementById('cantidad') as HTMLInputElement).value);

		if (!isNumeric(cantidad)) {
			alert("Valor no valido. Cualquier numero con el decimal marcado con punto o coma.");
			return e.preventDefault();
		}

		if (cantidad < 0) {
			alert("Por favor ingresa una cantidad mayor a 0");
			return e.preventDefault();
		}

		var moneda = parseInt((document.getElementById('moneda') as HTMLInputElement).value);

		// si todavia no se cargaron las conversiones, cargarlas.
		if (!obtenidos) {
			// solo awaitear si no son pesos
			if (parseInt((document.getElementById('moneda') as HTMLInputElement).value) == 1) {
				setearMonedas();
			}
			else {
				document.getElementById("botonSubmit").innerText = "Cargando conversiones...";
				await setearMonedas();
				document.getElementById("botonSubmit").innerText = "Calcular";
			}
		}
		
		var pvcia = parseInt((document.getElementById('pvcia') as HTMLInputElement).value);

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
		<Head>
			<title>Calculadora de pagos al exterior Argentina - markski.ar</title>
			<meta property="og:title" content="Calculadora de pagos al exterior Argentina - markski.ar" />
			<meta property="og:description" content="Calcula impuestos de pagos al exterior, Steam, Netflix, Spotify, Epic Games, etc." />
			<meta property="og:image" content="https://markski.ar/images/profileDesplacement.png" />
			<meta
				name="description"
				content="Calcula impuestos de pagos a Steam, Netflix, Spotify, Epic Games, etc."
			/>
		</Head>
		<Layout>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>calculadora de pagos al exterior</p>
			</Header>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>ingresá cuanto vas a cargar</p>
			</div>
			
			<form onSubmit={calcularTrigger}>
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
						<button style={{marginTop: '20px'}} type="submit" id="botonSubmit" className={utilStyles.button}>Calcular</button>
					</Grid>
				</Grid>
			</form>


			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.heading2Xl}>Total: AR$<span id="total" style={{fontWeight: '600'}}>0,00</span></p>
			</div>
			<SectorContainer>
				<div style={{whiteSpace: 'pre-line', minWidth: '20rem'}}>
					<span className={utilStyles.headingMd}>
						En la compra: <span className={utilStyles.money}>AR$<span id="totalCompra">0,00</span></span><br />
						En impuestos: <span className={utilStyles.money}>AR$<span id="totalImpuestos">0,00</span></span>
					</span>
					<small>
						<ul style={{marginBottom: '0rem'}}>
							<li>IVA Servicios Digitales <span className={utilStyles.money}>AR$<span id="servdig">0,00</span></span> <b>(21%)</b></li>
							<li>Percepción RG AFIP 4815 <span className={utilStyles.money}>AR$<span id="afip">0,00</span></span> <b>(45%)</b></li>
							<li>Ley impuesto PAIS <span className={utilStyles.money}>AR$<span id="pais">0,00</span></span> <b>(8%)</b></li>
							<li>Impuestos provinciales <span className={utilStyles.money}>AR$<span id="pvc">0,00</span></span> <b>(<span id="impuestlol">?</span>%)</b></li>
						</ul>
					</small>
				</div>
			</SectorContainer>

			<SectorContainer>
				Si te sirve la herramienta y tenes ganas, podes colaborar:
				<small>
					<ul style={{marginBottom: '0rem'}}>
						<li>Por Mercado Pago: A traves de <a href="https://www.cafecito.app/Markski" className={utilStyles.money}>Cafecito</a></li>
						<li>Por CBU: <span className={utilStyles.money}>0110337130033713474751</span> o al alias <span className={utilStyles.money}>markski</span></li>
					</ul>
				</small>
			</SectorContainer>
		</Layout>
		</>
	);
}