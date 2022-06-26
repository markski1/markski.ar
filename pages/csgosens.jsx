import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Grid from '@mui/material/Grid';

export default function Page() {

	var showingSetting = 1;

	function timerStuff() {
		var dpi = +(document.getElementById('dpi').value);
		var sens = +(document.getElementById('sens').value);
		var myaw = +(document.getElementById('myaw').value);
		if (!(dpi) || !(sens) || !(myaw)) return false;
		var edpi = dpi * sens;
		var edpi = edpi * (myaw / 0.022);
		document.getElementById("edpi").innerHTML = edpi.toFixed(2);

		var selection = +(document.getElementById('selection').value);
		if (selection != showingSetting) {
			switch (selection) {
				case 1: // format
					document.getElementById('selFormat').style.display = 'block';
					document.getElementById('selYaw').style.display = 'none';
					document.getElementById('selDpi').style.display = 'none';
					break;
				case 2: // m_yaw
					document.getElementById('selFormat').style.display = 'none';
					document.getElementById('selYaw').style.display = 'block';
					document.getElementById('selDpi').style.display = 'none';
					break;
				case 3: // dpi
					document.getElementById('selFormat').style.display = 'none';
					document.getElementById('selYaw').style.display = 'none';
					document.getElementById('selDpi').style.display = 'block';
					break;
			}
			showingSetting = selection;
		}
		return false;
	}

	function calcular(e) {
		var format = +(document.getElementById('format').value);
		var dpi = +(document.getElementById('dpi').value);
		var sens = +(document.getElementById('sens').value);
		var myaw = +(document.getElementById('myaw').value);
		var selection = +(document.getElementById('selection').value);

		var printResults = "";

		var newMyaw, newDpi, newFormat;

		switch (selection) {
			case 1: // format
				newFormat = +(document.getElementById('newFormat').value);
				if (format == newFormat) {
					printResults = "<p>You've chosen the same format in both cases.</p>";
					break;
				}

				format = GetFormatMultiplier(format);
				newFormat = GetFormatMultiplier(newFormat);
				newMyaw = myaw * (newFormat / format);

				printResults += "<p>Change your m_yaw to ";
				printResults += newMyaw.toFixed(4);
				printResults += " and your sensitivity to ";
				var newSens = (sens * (myaw / newMyaw));
				newSens = sens + ((newSens - sens) / 2);
				printResults += newSens.toFixed(2);
				printResults += ".</p>";
				break;
			case 2: // m_yaw
				newMyaw = +(document.getElementById('newMyaw').value);
				console.log(sens);
				console.log(myaw);
				console.log(newMyaw);
				sens = sens * (myaw / newMyaw);
				printResults = "<p>Change your sensitivity to " + sens.toFixed(2) + "</p>";
				break;
			case 3: // dpi
				newDpi = +(document.getElementById('newDpi').value);
				var edpi = sens * dpi;
				var newSens = edpi / newDpi;
				printResults = "<p>Change your sensitivity to " + newSens.toFixed(2) + "</p>";
				break;
		}
		document.getElementById("results").innerHTML = printResults;
		return e.preventDefault();
	}

	function GetFormatMultiplier(format) {
		switch (format) {
			case 0:
				return (21 / 9);
				break;
			case 1:
				return (16 / 9);
				break;
			case 2:
				return (16 / 10);
				break;
			case 3:
				return (4 / 3);
				break;
		}
	}

	return (
		<>
		<Layout func={timerStuff}>
			<Head>
				<title>CSGO Sens and m-yaw converter - markski.ar</title>
				<meta
					name="description"
					content="Converts your CSGO settings across DPI, aspect ratios and yaw."
				/>
				<meta name="og:title" content="CSGO Sens and m-yaw converter - markski.ar" />
			</Head>

			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>CSGO Sens and m-yaw converter</p>
			</div>

			<form onSubmit={calcular}>
				<span>eDPI: <span id="edpi">Loading...</span></span>
				<Grid container columnSpacing={2.5}>
					<Grid item xs>
						<span>Aspect Ratio</span>
						<select defaultValue={1} onChange={timerStuff} className={utilStyles.input} id="format" title="Your current aspect ratio.">
							<option value={0}>21:9</option>
							<option value={1}>16:9</option>
							<option value={2}>16:10</option>
							<option value={3}>4:3</option>
						</select>
						<span>Sensitivity</span>
						<input className={utilStyles.input} id="sens" onChange={timerStuff} defaultValue={1.5} type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" title="Your current sensitivity." />
						<span>Mouse DPI</span>
						<input className={utilStyles.input} id="dpi" onChange={timerStuff} defaultValue={800} type="number" pattern="[0-9]+([\.,][0-9]+)?" step="1" title="Your current DPI." />
					</Grid>
					<Grid item xs>
						<span>m_yaw</span>
						<input className={utilStyles.input} id="myaw" onChange={timerStuff} defaultValue={0.022} type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.001" title="Your current m_yaw." />

						<span>Action</span>
						<select defaultValue={1} className={utilStyles.input} id="selection">
							<option value={1}>Translate sens to new format</option>
							<option value={2}>Translate sens to new m_yaw</option>
							<option value={3}>Translate sens to new DPI</option>
						</select>

						<div id="selFormat">
							<span>New format:</span>
							<select defaultValue={3} className={utilStyles.input} id="newFormat" title="Your desired aspect ratio.">
								<option value={0}>21:9</option>
								<option value={1}>16:9</option>
								<option value={2}>16:10</option>
								<option value={3}>4:3</option>
							</select>
						</div>

						<div id="selYaw" style={{display: 'none'}}>
							<span>New m_yaw:</span>
							<input className={utilStyles.input} id="newMyaw" defaultValue={0.0165} type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.001" title="Your desired m_yaw." />
						</div>

						<div id="selDpi" style={{display: 'none'}}>
							<span>New dpi:</span>
							<input className={utilStyles.input} id="newDpi" defaultValue={400} type="number" pattern="[0-9]+([\.,][0-9]+)?" step="1" title="Your desired DPI." />
						</div>

						<span>&nbsp;</span>
						<input type="submit" className={utilStyles.button} value="Calculate" />
					</Grid>
				</Grid>
			</form>
			<div id="results" className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>Instructions will appear here.</p>
			</div>
		</Layout>
		</>
	);
}