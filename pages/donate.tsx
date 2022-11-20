import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Header from '../components/molecules/PageHeader';

export default function Page() {
	return (
		<>
		<Head>
			<title>Donate - markski.ar</title>
			<meta name="og:title" content="Donate - markski.ar" />
		</Head>
		<Layout>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Make a donation</p>
			</Header>
			<p>
				I invest a significant amount of my time creating and maintaining the tools, services and documentation available both in this website and on my GitHub page.
			</p>
			<p>
				Apart from the cost of the personal time I invest in this, there is also a cost associated with hosting and bandwidth which I must cover.
			</p>
			<p className={utilStyles.headingLg}>Donation methods</p>
			<ul>
				<li>If you live in Argentina, you can use <a href="https://www.cafecito.app/Markski" className={utilStyles.money}>Cafecito</a>, or transfer to CBU alias <span className={utilStyles.money}>markski</span></li>
				<li>If you live elsewhere in the world, you can use <a href="https://www.ko-fi.com/Markski" className={utilStyles.money}>Ko-Fi</a>.</li>
			</ul>
			<p>If you decide to donate, whichever way you choose, I will be extremely thankful!</p>
		</Layout>
		</>
	);
}