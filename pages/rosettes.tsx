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
							text = "add to server"
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
					Rosettes can add many features to your server, useful to admins and users alike.<br/>
					If you don't want something, you may disable it from <span style={{color: 'cyan'}}>/settings</span>.
				</span>
				<ul>
					<li><b>Role management</b><br/>Create AutoRoles for users to automatically assign themselves roles.</li>
					<li><b>Image functions</b><br/>SauceNAO to find artwork sources, GIF reversing, converting image formats, etc.</li>
					<li><b>Downloading Twitter videos</b><br/>Uploads a video file from any tweet you give it.</li>
					<li><b>Polls</b><br/>Easily create polls where people can anonymously vote.</li>
					<li><b>Playing music</b><br/>Rosettes can join your voicechats and play music as requested.</li>
					<li><b>Reminders</b><br/>Let users set reminder alarms for themselves, even in DM's.</li>
					<li><b>Minigame</b><br/>Your average time-wasting Discord bot minigame, featuring farming and fishing.</li>
					<li><b>Miscelaneous</b><br/>- Display who joins and leaves the server<br/>- Provide status information for certain games<br/>- Throwing dice and coins<br/>- Even more.</li>
				</ul>
				<p>
					<small>For a list of commands, <Link href="/rosettes/commands"><span style={{color: 'cyan'}}>click here</span></Link>.</small>
				</p>
				<p>Rosettes is in active development, and always looking for new features.<br/>Have an idea, or something doesn't work? Please use the <span style={{color: 'cyan'}}>/feedback</span> command.</p>
				
				<small>If you wish to support hosting and development of Rosettes, you can <Link href="/donate"><span style={{color: 'cyan'}}>donate</span></Link>.</small>
			</SectorContainer>
		</Layout>
		</>
	);
}