import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from '../components/molecules/PageHeader';
import SectorContainer from '../components/molecules/SectorContainer';
import MButton from '../components/atoms/MButton';

export default function Page() {
	return (
		<>
		<Head>
			<title>Rosettes, the simple discord bot</title>
			<meta
				name="description"
				content="Rosettes is a simple, open source discord bot with many easy to use features."
			/>
			<meta name="og:title" content="Rosettes, The Simple Discord Bot" />
		</Head>
		<Layout>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Rosettes</p>
			</Header>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>about</p>
			</div>
			<SectorContainer>
				<p>
					Rosettes is a simple, free and open source Discord bot.
				</p>
				<p>
					It's objectives are:
				</p>
				<small>
					<ul>
						<li>To be ridiculously simple to set up.</li>
						<li>To offer it's functionality in the most straightforward way possible.</li>
						<li>To collect as little user and guild data as possible.</li>
						<li>To collect absolutely no message data, ever.</li>
					</ul>
				</small>
				<div style={{textAlign: 'center'}}>
					<a href="https://discord.com/api/oauth2/authorize?client_id=970176524110147605&permissions=275149548624&scope=bot" rel="noreferrer" target="_blank">
						<MButton
							text = "invite to server"
							color = "#2D215C"
							width = "8rem"
						/>
					</a>
					<a href="https://snep.markski.ar/rosettes" rel="noreferrer" target="_blank">
						<MButton
							text = "admin panel"
							color = "#4D215C"
							width = "8rem"
						/>
					</a>
					<Link href="/rosettes/commands">
						<MButton
							text = "command list"
							color = "#1D2152"
							width = "8rem"
						/>
					</Link>
					<Link href="/donate">
						<MButton
							text = "donate"
							color = "#43055C"
							width = "8rem"
						/>
					</Link>
					<a href="https://github.com/markski1/RosettesDiscord" rel="noreferrer" target="_blank">
						<MButton
							text = "github"
							color = "#521D4F"
							width = "8rem"
						/>
					</a>
				</div>
			</SectorContainer>


			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>functions</p>
			</div>
			<SectorContainer>
				<p>
					It's functions include, but are not limited to:
				</p>
				<ul>
					<li>Dice-rolling and coin-flipping commands.</li>
					<li>Easily create polls with anonymous voting.</li>
					<li>Plays music off Youtube, Yandex, Soundcloud and Bandcamp.</li>
					<li>Role Management (Assign role on join, unlimited custom AutoRoles)</li>
					<li>Let users set ping alarms for themselves, even in DM's.</li>
					<li>Extracts video files off twitter links.</li>
					<li>Many miscelaneous functions (urban dictionary, emoji exporter, csgo/ffxiv status checker, shows how many playing when steam game linked, etc)</li>
				</ul>
				<p>Want Rosettes to do something not listed here? Just ask for it, and it might be added!</p>
				<p>
					<small>For a list of commands, <Link href="/rosettes/commands"><span style={{color: 'cyan'}}>click here</span></Link>.</small></p>
					<small>To suggest a new feature, contact me through any of the methods in the <Link href="/"><span style={{color: 'cyan'}}>main page</span></Link>.</small>
				<p>
					<small>If you wish to support hosting and development of Rosettes, you can <Link href="/donate"><span style={{color: 'cyan'}}>donate</span></Link>.</small>
				</p>
			</SectorContainer>
		</Layout>
		</>
	);
}