import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

function PrintEntry(props: { title: string; text: string; date: string; url: string; }) {
	return (
		<>
			<div className={utilStyles.headingContainer} style={{paddingBottom: '30px'}}>
				<p>
					<big>
						{props.title}
					</big>
				</p>
				<p>
					{props.text}
				</p>
				<p>
					Happened in <b>{props.date}</b>
				</p>
				<a href={props.url} >
					Source
				</a>
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
		<Head>
			<title>Nintendo Graveyard - markski.ar</title>
			<meta name="og:title" content="Nintendo Graveyard - markski.ar" />
			<meta property="og:description" content="A collection of all things killed by nintendo" />
			<meta property="og:image" content="https://markski.ar/images/profileDesplacement.png" />
			<meta
				name="description"
				content="A collection of all things killed by nintendo."
			/>
		</Head>
		<Layout>
			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Nintendo Graveyard</p>
			</div>

			<p className={utilStyles.headingMd}>Products, services and events killed by Nintendo</p>
			<p>This is an incomplete list, at least for now. Read the footer.</p>

			<PrintEntry
				title='GilvaSunner Youtube Channel'
				url='https://kotaku.com/nintendo-dmca-copyright-strike-youtube-music-mario-soun-1848449021'
				date='January 30, 2022'
				text='GilvaSunner, a Youtube channel which uploads game soundtracks, gets obliterated by over a thousand of copyright claims at once from Nintendo.'
			/>
			<PrintEntry
				title='Removing hundreds of fan games off Game Jolt'
				url='https://screenrant.com/nintendo-dmca-takedown-hundreds-fan-made-game-jolt/'
				date='January 6, 2021'
				text='Nintendo issued their largest DMCA to date, forcing Game Jolt to remove hundreds of fan games.'
			/>
			<PrintEntry
				title='Etika Joy-Con Shells for Charity'
				url='https://www.dualshockers.com/nintendo-issues-cease-and-desist-over-custom-etika-joy-con-shells/'
				date='December 7, 2020'
				text='Content Creator <i>CptnAlex</i> creates custom ‘Etikon’ Joy-Con shells in August 2019, in memory of <i>Etika</i>. He proceeds to raise US$10k for charity through this, before the whole ordeal is C&D by Nintendo.'
			/>
			<PrintEntry
				title='Banning Twitch Streamers for playing their game'
				url='https://www.nintendolife.com/news/2020/11/twitch_streamers_banned_for_playing_hyrule_warriors_age_of_calamity'
				date='November 20, 2020'
				text='Nintendo issued DMCAs streamers for playing Hyrule Warriors on day of release, causing Twitch to issue temporary bans.'
			/>
			<PrintEntry
				title='The Big House SMB Online Tournament'
				url='https://twitter.com/TheBigHouseSSB/status/1329521081577857036'
				date='November 19, 2020'
				text='Nintendo issues C&D to an important Super Smash Bros online event due to the usage of a competent unofficial netplay platform. Another argument being the usage of illegal copies of the game, which is not only improbable, but also ridiculous as SMB has not been in sale for years.'
			/>
			<PrintEntry
				title='Legend of Zelda: The Missing Link'
				url='https://gamerant.com/nintendo-zelda-missing-link-takedown/'
				date='October 17, 2020'
				text='Fan game/romhack years in the making made by popular Mario modder <i>Kaze Emanuar</i> gets both website and trailers taken down by Nintendo.'
			/>
			<PrintEntry
				title='Logistics Consulting LLC Modchip Installation Service'
				url='https://arstechnica.com/gaming/2020/06/nintendo-issues-cease-and-desist-for-switch-modchip-installation-service/'
				date='June 12, 2020'
				text='Nintendo issues C&D to a service which installs modchips in Nintendo Switch consoles, allowing the usage of custom homebrew software.'
			/>
			<PrintEntry
				title='Mario asset in "Dreams"'
				url='https://www.ign.com/articles/sony-dreams-nintendo-mario-copyright-ip-intellectual-property-lawsuit'
				date='March 21, 2020'
				text='A custom asset utilized for many fangames in the "Dreams" platform, created by user <i>PieceOfCraft</i>, is removed from the game at Nintendo request.'
			/>
			<PrintEntry
				title='LoveRetro, LoveROMS'
				url='https://www.polygon.com/2018/7/22/17600008/nintendo-roms-lawsuit-cease-desist'
				date='July 22, 2018'
				text='Nintendo issues C&D to two services which allow the download of old retro games, most of which were not available for purchase through any legal medium anymore.'
			/>
			<PrintEntry
				title='Zelda30Tribute'
				url='https://www.zelda30tribute.com/'
				date='April 8, 2018'
				text='Nintendo issues C&D to a free-to-play 3D Browser Zelda fangame.'
			/>
			<PrintEntry
				title='Pokemon Uranium'
				url='https://gamerant.com/pokemon-uranium-taken-down-after-multiple-nintendo-notices/'
				date='August 24, 2016'
				text='A Pokemon fan game which was quickly gaining traction and popularity is taken down after multiple notices from Nintendo.'
			/>
			<PrintEntry
				title='AM2R (Metroid fan game)'
				url='https://www.ign.com/articles/2016/08/08/nintendo-shuts-down-metroid-2-fan-remake-am2r'
				date='August 2016 (aprox)'
				text='A fan-made remake of Metroid II: Return of Samus gets taken down by Nintendo within days of being released.'
			/>
			<PrintEntry
				title='SM64 fan remake on Unreal Engine 4'
				url='https://roystanross.wordpress.com/super-mario-64-hd/'
				date='April 2015 (aprox)'
				text='Nintendo issues C&D to a free-to-play remake of Super Mario 64 on the day of release.'
			/>

			<p>Notes:</p>
			<ul>
				<li>Project M is not included as it was taken down by it's devs before legal action.</li>
				<li>I understand that some of the items listed were illegal. This list isn't meant to be composed of only unfair instances.</li>
				<li>This list is incomplete. Send submissions to me@markski.ar or to @a_markski on Twitter</li>
			</ul>

		</Layout>
		</>
	);
}