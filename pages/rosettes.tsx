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
			<title>Rosettes, the simple discord bot - markski.ar</title>
			<meta name="og:title" content="Rosettes, the simple discord bot - markski.ar" />
			<meta property="og:description" content="Rosettes is a simple, open source discord bot with many easy to use features." />
			<meta property="og:image" content="https://markski.ar/images/rosettes.png" />
			<meta
				name="description"
				content="Rosettes is a simple, open source discord bot with many easy to use features."
			/>
		</Head>
		<Layout>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Rosettes</p>
			</Header>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>about</p>
			</div>
			<SectorContainer>
				<img
					src = "/images/rosettes.png"
					width= "20%"
					style = {{float: 'right'}}
				/>
				<span>
					Rosettes is a simple, free and open source Discord bot.
				</span>
				
				<p>
					It's objectives are:
				</p>
				<small>
					<ul>
						<li>To be simple to set up.</li>
						<li>To be as straightforwards as possible in all it's functions.</li>
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
				<span>
					It's functions include, but are not limited to:
				</span>
				<ul>
					<li>Dice and coin commands.</li>
					<li>Easily create polls with anonymous voting.</li>
					<li>Plays music from given links or search terms.</li>
					<li>Extracts video files off Twitter links.</li>
					<li>Role management (Role-on-Join and custom AutoRoles with reactions)</li>
					<li>Displays users who joined and left if you specify a channel for it.</li>
					<li>Let users set reminder alarms for themselves, even in DM's.</li>
					<li>Simple gimmicky RPG fishing minigame thing.</li>
					<li>Many more miscelaneous functions (urban dictionary, emoji exporter, csgo/ffxiv status checker, shows how many playing when steam game linked, etc)</li>
				</ul>
				<small>Most of these features can be individualy disabled from the admin panel, if desired.</small>
				<p>Rosettes is in active development, and always looking for new features.<br/>Have an idea, or something doesn't work? Please use the <span style={{color: 'cyan'}}>/feedback</span> command.</p>
				<p>
					<small>For a list of commands, <Link href="/rosettes/commands"><span style={{color: 'cyan'}}>click here</span></Link>.</small>
				</p>
				<small>If you wish to support hosting and development of Rosettes, you can <Link href="/donate"><span style={{color: 'cyan'}}>donate</span></Link>.</small>
			</SectorContainer>
		</Layout>
		</>
	);
}