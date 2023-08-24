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
				SAMonitor is a free, open source, public server browser, API and Masterlist alternative for SA-MP and open.mp.
				
				<p>The API is written in ASP.NET 7, as it runs rather quickly.</p>
                <p>The website is written in HTMX & PHP 8, as I wanted to provide the most lightweight possible interface while still feeling reasonably modern.</p>
				
				<div style={{textAlign: 'center'}}>
					<a href="https://sam.markski.ar" rel="noreferrer" target="_blank">
						<MButton
							text = "visit SAM"
							color = "#2D215C"
							width = "8rem"
						/>
					</a>
					<a href="https://github.com/markski1/SAMonitor/blob/main/README.md" rel="noreferrer" target="_blank">
						<MButton
							text = "documentation"
							color = "#4D215C"
							width = "8rem"
						/>
					</a>
					<a href="https://github.com/markski1/SAMonitor" rel="noreferrer" target="_blank">
						<MButton
							text = "github"
							color = "#521D4F"
							width = "8rem"
						/>
					</a>
				</div>
			</Section>
		</Layout>
		</>
	);
}