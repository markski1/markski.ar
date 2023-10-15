import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Header from '../components/atoms/PageHeader';
import SectorContainer from '../components/atoms/SectionContainer';
import HeadParams from '../components/atoms/HeadParams';

export default function Page() {
	// CONSTANT ARRAY: Contains the percentage of taxes per province.
	//                     N/A  CABA  CHACO  CRDB  LPMP  NEUQ  RNGR  SALTA  TDF
	const pvcPercentage = [0.0, 0.02, 0.055, 0.03, 0.01, 0.03, 0.05, 0.036, 0.0];

    const [currencies, setCurrencies] = useState<{ eur: number; usd: number; brs: number; }>({ eur: -1, usd: -1, brs: -1 });
    const [amount, setAmount] = useState(0);
    const [displayAmount, setDisplayAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalTaxes, setTotalTaxes] = useState(0);
    const [currency, setCurrency] = useState(1);
    const [province, setProvince] = useState(0);
    const [digitalServiceTaxDisplay, setDigitalServiceTaxDisplay] = useState(0);
    const [perceptionTaxDisplay, setPerceptionTaxDisplay] = useState(0);
    const [paisTaxDisplay, setPaisTaxDisplay] = useState(0);
    const [goodsTaxDisplay, setGoodsTaxDisplay] = useState(0);
    const [provinceTaxDisplay, setProvinceTaxDisplay] = useState(0);
    const [provincePercent, setProvincePercent] = useState(0);

    async function fetchCurrencies() {
        const response = await fetch("https://snep.markski.ar/monedas.php");
        const data = await response.json();
        setCurrencies(data);
    }

    useEffect(() => {
        fetchCurrencies();
    }, []);

    useEffect(() => {
        let workingAmount:number;

        workingAmount = amount;
        
        if (currency == 2) {
            workingAmount *= currencies.usd;
        }
        if (currency == 3) {
            workingAmount *= currencies.eur;
        }
        if (currency == 4) {
            workingAmount *= currencies.brs;
        }

        if (workingAmount < 0) {
            alert("Perdón, pero esa conversión actualmente no esta funcionando.");
            return;
        }

        let digitalServiceTax:number;

        // Tierra del Fuego does not pay digital service IVA
        if (province == 8) {
            digitalServiceTax = 0;
            document.getElementById("tdf-alert").style.display = 'block';
        }
        else {
            digitalServiceTax = amount * 0.21;
            document.getElementById("tdf-alert").style.display = 'none';
        }
        
		let BIENES = workingAmount * 0.25;
        let AFIP = workingAmount * 0.45;
        let PAIS = workingAmount * 0.08;
        let provincePercent = 0.0;
        
        if (province > 0) {
            provincePercent = workingAmount * pvcPercentage[province];
        }
        
        let workingTotalTaxes = AFIP + PAIS + provincePercent + digitalServiceTax + BIENES;

        setPerceptionTaxDisplay(AFIP);
        setProvinceTaxDisplay(provincePercent);
        setDigitalServiceTaxDisplay(digitalServiceTax);
        setPaisTaxDisplay(PAIS);
        setGoodsTaxDisplay(BIENES);
        setProvincePercent(pvcPercentage[province] * 100);
        
        setTotalTaxes(workingTotalTaxes);
        setDisplayAmount(workingAmount);
        setTotal(workingAmount + workingTotalTaxes);
    }, [amount, currency, province]);

    function updateAmount() {
        let number = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
        if (isNaN(number) || !isFinite(number))
            number = 0;

        setAmount(number);
    }

    function updateCurrency() {
        let number = parseFloat((document.getElementById('currency') as HTMLInputElement).value);
        if (isNaN(number) || !isFinite(number))
            number = 1;
        
        setCurrency(number);
    }

    function updateProvince() {
        let number = parseFloat((document.getElementById('province') as HTMLInputElement).value);
        if (isNaN(number) || !isFinite(number) || number < 0) {
			number = 0;
		}

        setProvince(number);
    }

	function parseToPesos(pesosAmount: number) {
		return (
			<span className={utilStyles.money}>
				AR$
				{pesosAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
			</span>
		);
	}

	return (
		<>
		<HeadParams
			title = "Calculadora de pagos al exterior Argentina"
			description = "Calcula impuestos de pagos al exterior, Steam, Netflix, Spotify, Epic Games, etc."
			/>
		<Layout type='page'>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>calculadora de pagos al exterior</p>
			</Header>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>ingresá cuanto vas a cargar</p>
			</div>
			
			<div className={utilStyles.flexContainer}>
				<div className={utilStyles.flexBox}>
					<input min={0} onChange={() => { updateAmount() }}  className={utilStyles.input} id="amount" placeholder="Cantidad $" type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" title="Numero con no mas de 2 decimales." />
				</div>
				<div className={utilStyles.flexBox}>
					<select defaultValue={1} onChange={() => { updateCurrency() }}  className={utilStyles.input} id="currency">
						<option value={1}>AR$</option>
						<option value={2}>USD</option>
						<option value={3}>EUR</option>
						<option value={4}>BR$</option>
					</select>
				</div>
				<div className={utilStyles.flexBox}>
					<select defaultValue={0} onChange={() => { updateProvince() }}  className={utilStyles.input} id="province">
						<option value={0}>Provincia</option>
						<option value={1}>Buenos Aires o CABA</option>
						<option value={2}>Chaco</option>
						<option value={3}>Cordoba</option>
						<option value={4}>La Pampa</option>
						<option value={5}>Neuquén</option>
						<option value={6}>Rio Negro</option>
						<option value={7}>Salta</option>
						<option value={8}>Tierra del Fuego</option>
						<option value={0}>Ninguna de las anteriores</option>
					</select>
				</div>
				<div className={utilStyles.flexBox} style={{textAlign: 'center'}}>
					<span className={utilStyles.heading2Xl}>Total: {parseToPesos(total)}</span>
				</div>
			</div>


			<div className={utilStyles.centerContainer}>
				
			</div>
			<SectorContainer>
				<div style={{whiteSpace: 'pre-line', minWidth: '20rem'}}>
					<span className={utilStyles.headingMd}>
						En la compra: {parseToPesos(displayAmount)}<br />
						En impuestos: {parseToPesos(totalTaxes)}
					</span>
					<small>
						<ul style={{marginBottom: '0rem'}}>
							<li>IVA Servicios Digitales {parseToPesos(digitalServiceTaxDisplay)} <b>(21%)</b> <span id="tdf-alert" style={{display: 'none'}}>* Tierra del Fuego no paga IVA</span></li>
							<li>Percepción RG AFIP 4815 {parseToPesos(perceptionTaxDisplay)} <b>(45%)</b></li>
							<li>Percepción RG AFIP 5272 {parseToPesos(goodsTaxDisplay)} <b>(45%)</b></li>
							<li>Ley impuesto PAIS {parseToPesos(paisTaxDisplay)} <b>(8%)</b></li>
							<li>Impuestos provinciales {parseToPesos(provinceTaxDisplay)} <b>({provincePercent}%)</b></li>
						</ul>
					</small>
				</div>
			</SectorContainer>

			<div style={{backgroundColor: '#FF002244', padding: '.5rem 1rem'}}>
				<p>Atención:</p>
				<p>La versión oficial de la calculadora se encuentra ahora en <a href="https://calc.markski.ar" style={{color: 'cyan'}}>Calculando Argentina</a>.</p>
				<p>Esta versión seguira funcionando al menos hasta fin de año, con conversiones actualizadas y todo. Pero recomiendo usar la nueva.</p>
			</div>

			<SectorContainer>
				<span className={utilStyles.headingMd}>¿Que tan exacto es el resultado?</span>
				<br/>
				<p><small>
					Con pesos suele ser exacto.<br/>
					En otra divisa, hay una chance de que tu banco use una conversion distinta, a veces ~5% mayor.<br/>
				</small></p>
				<span><small>
					Esta calculadora asume un caso común. Para estar seguros, recomiendo <a className={utilStyles.money} href="https://www.mercadopago.com.ar/ayuda/pagos-en-moneda-extranjera_4063">revisar esta guia</a>.
				</small></span>
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