import * as React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/molecules/PageHeader';
import SectorContainer from '../../components/molecules/SectorContainer';
import CommandEntry from '../../components/atoms/CommandEntry';

export default function Page() {
	return (
		<>
		<Head>
			<title>Rosettes command list<br/>markski.ar</title>
			<meta name="og:title" content="Rosettes command list<br/>markski.ar" />
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
					<CommandEntry
						name = "/play"
						parameters = "[url or search term]"
						description = "Joins your voice channel and starts playing the given track. If a song is already playing, it'll be added to the queue."
					/>
					<CommandEntry
						name = "/skip"
						description = "Skip to the next song in the queue, if applicable."
					/>
					<CommandEntry
						name = "/stop"
						description = "Stops the music playback."
					/>
					<CommandEntry
						name = "/leave"
						description = "Make Rosettes leave the voicechat. Please use when you're done with it."
					/>
					<CommandEntry
						name = "/toggle"
						description = "Use to pause and resume playback without stopping the entire song."
					/>
				</div>
				<h2>Utility commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<CommandEntry
						name = "/twtvid"
						parameters = "[tweet url]"
						appCommand = {true}
						description = "Download the video off a provided tweet."
					/>
					<CommandEntry
						name = "/urban"
						parameters = "[term]"
						description = "Returns an Urban Dictionary definition of the given term."
					/>
					<CommandEntry
						name = "/alarm"
						parameters = "[amout] [optional: time unit]"
						description = "Sets an alarm for Rosettes to ping you in the given amount of minutes. May cancel with /cancelalarm."
					/>
					<CommandEntry
						name = "/exportallemoji"
						description = "Exports all emoji in the guild to a ZIP. May only be used by server owner."
					/>
					<CommandEntry
						name = "/makepoll"
						description = "Provides an UI to create a poll with up to 4 choices, the bot will keep track of votes and prevent repeat votes."
					/>
				</div>
				<h2>Gambling commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<CommandEntry
						name = "/dice"
						parameters = "[number]"
						description = "Rolls a dice, from 1 to the given number."
					/>
					<CommandEntry
						name = "/coin"
						description = "Does a coin throw. Can be provided two custom faces."
					/>
				</div>
				<h2>Miscelaneous commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<CommandEntry
						name = "/reversegif"
						parameters = "[url to gif]"
						appCommand = {true}
						description = "Reverses the provided gif."
					/>
					<CommandEntry
						name = "/throwbrick"
						parameters = "[emoji/user] [optional: reversed]"
						appCommand = {true}
						description = 'Generates a GIF of the "throwing brick" meme with the provided image.'
					/>
					<CommandEntry
						name = "/makesweeper"
						parameters = "[emoji] [optional: difficulty]"
						description = "Creates a Minesweeper-Like field where the mines are the given emoji."
					/>
					<CommandEntry
						name = "/csgo"
						description = "Shows status of CS:GO servers."
					/>
					<CommandEntry
						name = "/ffxiv"
						parameters = "[optional: server]"
						description = "Shows status of FFXIV servers."
					/>
				</div>
				<h2>Farming minigame commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<CommandEntry
						name = "/farm view"
						 description = "View what is happening in your farm, and buttons with your possible actions."
					/>
					<CommandEntry
						name = "/farm inventory"
						 description = "Show your inventory items and pets."
					/>
					<CommandEntry
						name = "/farm fish"
						 description = "Try to catch a fish. Can be used every hour."
					/>
					<CommandEntry
						name = "/farm shop give"
						 description = "Buy and sell items."
					/>
					<CommandEntry
						name = "/farm"
						 parameters = "[item] [amount] [user]"
						 description = "Give a selected item to other user."
					/>
					<CommandEntry
						name = "/farm top"
						 description = "Minigame leaderboard for the guild."
					/>
				</div>
				<h2>System commands</h2>
				<div style={{marginLeft: '1rem'}}>
					<CommandEntry
						name = "/setlogchan"
						parameters = "[optional:disable]"
						description = "Sets showing user join and leave to a given channel."
					/>
					<CommandEntry
						name = "/setrpgchan"
						parameters = "[optional:disable]"
						description = "Restricts RPG commands to a given channel."
					/>
					<CommandEntry
						name = "/keygen"
						description = "Generate a login key for the admin panel."
					/>
					<CommandEntry
						name = "/setautorole"
						parameters = "[id]"
						description = "Apply an AutoRoles prompt to a channel. The ID is given by the web panel after you set it up."
					/>
					<CommandEntry
						name = "/feedback"
						parameters = "[text]"
						description = "Send any feedback such as suggestions, bug reports or other messages directly to me."
					/>
					<CommandEntry
						name = "/about"
						description = "Information about Rosettes."
					/>
				</div>
			</SectorContainer>
		</Layout>
		</>
	);
}