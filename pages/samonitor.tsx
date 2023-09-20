import * as React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Header from '../components/atoms/PageHeader';
import MButton from '../components/atoms/MButton';
import HeadParams from '../components/atoms/HeadParams';
import Section from '../components/molecules/Section';

export default function Page() {
	return (
		<>
		<HeadParams
			title = 'SAMonitor, a server monitor.'
			description = 'SAMonitor is a server monitor and API for sa-mp and openmultiplayer..'
		/>
		<Layout type='page'>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>SAMonitor</p>
			</Header>
			<Section title="about">
				SAMonitor (or San Andreas Monitor) is a free, open source, public server browser, API and Masterlist alternative for SA-MP and open.mp.
				
				<p>The backend is written entirely in ASP.NET 7. It runs 24/7, constantly querying servers, collecting information and keeping track of playercounts and server availablility across the globe.</p>
                <p>The website is written in HTMX & PHP 8, as I wanted to provide the most lightweight possible interface while still feeling reasonably modern. It provides filtering options, global metrics and server-specific pages.</p>
				
				<p>Visit: <a href="https://sam.markski.ar" style={{color: 'cyan'}}>sam.markski.ar</a></p>
				<p>Source code and API documentation <a href="https://github.com/markski1/SAMonitor/" style={{color: 'cyan'}}>on GitHub</a></p>
			</Section>
		</Layout>
		</>
	);
}