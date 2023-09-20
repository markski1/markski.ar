import * as React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Header from '../components/atoms/PageHeader';
import HeadParams from '../components/atoms/HeadParams';
import Section from '../components/molecules/Section';

export default function Page() {
	return (
		<>
		<HeadParams
			title = 'Calculando Argentina'
			description = 'A collection of calculators relevant to the Argentine Republic.'
			image = 'https://calc.markski.ar/logo_small.png'
		/>
		<Layout type='page'>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Calculando Argentina</p>
			</Header>
			<Section title="about">
				<img
					src = "https://calc.markski.ar/logo_small.webp"
					width= "20%"
					style = {{float: 'right'}}
				/>
				
				Calculando Argentina is an open source progressive web application (PWA), providing common calculations relevant to the Argentine Republic.

                <p>It provides a simple and lightweight user interface, responsive across device sizes and form factors, and functions entirely client-side.</p>

                <p>It is written in TypeScript, on React/Next.JS</p>
				
				<p>Visit: <a href="https://calc.markski.ar" style={{color: 'cyan'}}>calc.markski.ar</a></p>
				<p>Source code: <a href="https://github.com/markski1/Calculadoras/" style={{color: 'cyan'}}>on GitHub</a></p>
			</Section>
		</Layout>
		</>
	);
}