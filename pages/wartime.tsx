import * as React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from '../components/atoms/PageHeader';
import HeadParams from '../components/atoms/HeadParams';
import Section from '../components/molecules/Section';

export default function Page() {
	return (
		<>
		<HeadParams
			title = 'Wartime Leader'
			description = 'Wartime Leader is a simple web-based fortress management and defense game.'
			image = 'https://markski.ar/images/rosettes.png'
		/>
		<Layout type='page'>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Wartime Leader</p>
			</Header>
			<Section title="about">
                <p>Wartime leader is a simple game, inspired on Enchanted Fortress, a text-based Android game by Ivan Kravarscan.</p>
                <p>It revolves around managing a fortress during wartime for long enough to achieve the scholar's objective.<br />
                The objective of the game is to complete in the lowest amount of weeks possible.</p>
                <img src="./images/wartime/wartime.png"/>
                <p>It is built in HTMX for presentation, and PHP for the logic.</p>
                <p><Link style={{color: 'cyan'}} href="https://github.com/markski1/wartime-leader">Source code</Link></p>
                <p><Link style={{color: 'cyan'}} href="https://snep.markski.ar/wartime-leader">Play the game</Link></p>
			</Section>
		</Layout>
		</>
	);
}