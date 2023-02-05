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
			<title>Rosettes command list - markski.ar</title>
			<meta name="og:title" content="Rosettes command list - markski.ar" />
			<meta property="og:description" content="A list with commands for Rosettes, the simple, open source Discord bot." />
			<meta property="og:image" content="https://markski.ar/images/rosettes.png" />
			<meta
				name="description"
				content="A list with commands for Rosettes, the simple, open source Discord bot."
			/>
		</Head>
		{/* Use 'home' parameter to make the back-to-home button not show up. */}
		<Layout home>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Rosettes commands</p>
			</Header>
			<SectorContainer>
				<p>
					The following is a somewhat-complete list of commands that Rosettes understands and runs. Some but not all of these might work in DM's	 too.
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
						<b>/makepoll</b> - Provides an UI to create a poll with up to 4 choices, the bot will keep track of votes and prevent repeat votes.
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
						<b>/makesweeper [emoji] [optional: difficulty, hideZeros, unspoilered]</b> - Creates a Minesweeper-Like field where the mines are the given emoji.
					</p>
				</div>
				<h2>Game status commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/csgo</b> - Shows status of CS:GO servers.
					</p>
					<p>
						<b>/ffxiv [optional: server]</b> - Shows status of FFXIV servers.
					</p>
				</div>
				<h2>Farming minigame commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/farm view</b> - View what is happening in your farm, and buttons with your possible actions.
					</p>
					<p>
						<b>/farm inventory</b> - Show your inventory items and pets.
					</p>
					<p>
						<b>/farm fish</b> - Try to catch a fish. Can be used every hour.
					</p>
					<p>
						<b>/farm shop</b> - Buy and sell items.
					</p>
					<p>
						<b>/farm give [item]</b> - Give a selected item to other user.
					</p>
					<p>
						<b>/farm use [item] [optional:user]</b> - Use an item, optionally with another user.
					</p>
				</div>
				<h2>System commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<p>
						<b>/setlogchan [optional:disable]</b> - Sets showing user join and leave to a given channel.
					</p>
					<p>
						<b>/setrpgchan [optional:disable]</b> - Restricts RPG commands to a given channel.
					</p>
					<p>
						<b>/keygen</b> - Generate a login key for the admin panel.
					</p>
					<p>
						<b>/setautorole [id]</b> - Apply an AutoRoles prompt to a channel. The ID is given by the web panel after you set it up.
					</p>
					<p>
						<b>/feedback [text]</b> - Send any feedback such as suggestions, bug reports or other messages directly to me.
					</p>
					<p>
						<b>/about</b> - Information about Rosettes.
					</p>
				</div>
			</SectorContainer>
		</Layout>
		</>
	);
}