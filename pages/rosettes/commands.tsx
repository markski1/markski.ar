import * as React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/molecules/PageHeader';
import SectorContainer from '../../components/molecules/SectorContainer';

export default function Page() {
	return (
		<>
		<Head>
			<title>Rosettes, The Simple Discord Bot</title>
			<meta
				name="description"
				content="Rosettes is a simple, open source Discord bot with many easy to use features."
			/>
			<meta name="og:title" content="Rosettes, The Simple Discord Bot" />
		</Head>
		{/* Use 'home' parameter to make the back-to-home button not show up. */}
		<Layout home>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Rosettes commands</p>
			</Header>
			<SectorContainer>
				<p>
					The following list comprises a somewhat-complete list of commands that Rosettes is able to run. Be advised some of these will work in DM's too.
				</p>
				<h2>Music commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/play [url or search term]</b> - Joins your voice channel and starts playing the given track. If a song is already playing, it'll be added to the queue.
					</p>
					<p>
						<b>/skip</b> - Skip to the next song in the queue, if applicable.
					</p>
					<p>
						<b>/stop</b> - Stops the music playback.
					</p>
					<p>
						<b>/leave</b> - Make Rosettes leave the voicechat. Please use when you're done with it.
					</p>
					<p>
						<b>/toggle</b> - Use to pause and resume playback without stopping the entire song.
					</p>
				</div>
				<h2>Utility commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/twtvid [tweet url]</b> - Download the video off a provided tweet.
					</p>
					<p>
						<b>/urban [term]</b> - Returns an Urban Dictionary definition of the given term.
					</p>
					<p>
						<b>/alarm [amout in minutes]</b> - Sets an alarm for Rosettes to ping you in the given amount of minutes. May cancel with /cancelalarm.
					</p>
					<p>
						<b>/exportallemoji</b> - Exports all emoji in the guild to a ZIP. May only be used by server owner.
					</p>
					<p>
						<b>/makepoll [question] [options...]</b> - Create a poll with up to 4 choices, the bot will keep track of votes and stop people from voting twice.
					</p>
				</div>
				<h2>Random commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/dice [number]</b> - Rolls a dice, from 1 to the given number.
					</p>
					<p>
						<b>/coin</b> - Does a coin throw. Can be provided two custom faces.
					</p>
					<p>
						<b>/checkem</b> - Returns a random "roll ID", allows rolling for "dubs" as done in internet messageboards.
					</p>
					<p>
						<b>/makesweeper [emoji] [optional: difficulty]</b> - Creates a Minesweeper-Like field where the mines are the chosen emoji.
					</p>
				</div>
				<h2>Game status commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/csgo</b> - Shows status on CS:GO servers.
					</p>
					<p>
						<b>/ffxiv [optional: server]</b> - Shows status of FFXIV servers.
					</p>
				</div>
			</SectorContainer>
		</Layout>
		</>
	);
}