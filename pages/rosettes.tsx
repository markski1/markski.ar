import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Page() {
	return (
		<>
		<Layout>
			<Head>
				<title>Rosettes, The Simple Discord Bot</title>
				<meta
					name="description"
					content="Rosettes is a simple, open source Discord bot with many easy to use features."
				/>
				<meta name="og:title" content="Rosettes, The Simple Discord Bot" />
			</Head>

			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>Rosettes, The Simple Discord Bot</p>
			</div>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>About Rosettes</p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>
					Rosettes is a simple, free and open source Discord bot.
				</p>
				<p>
					It's functions include, but are not limited to:
				</p>
				<ul>
					<li>Role management (Assign role on join, AutoRoles)</li>
					<li>Dice-rolling and coin-flipping commands.</li>
					<li>Plays music off Youtube, Yandex, Soundcloud and Bandcamp.</li>
					<li>Displays information about a given user or guild.</li>
					<li>Extracts video files off twitter links.</li>
					<li>Many miscelaneous functions (urban dictionary, reminder alarms, emoji exporter, etc)</li>
				</ul>
				<p>Most important of all, Rosettes is in active development, and always accepting feedback for new features.</p>
			</div>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>Using Rosettes</p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>To get Rosettes in your server is very straightforwards.</p>
				<p><b>1. <a style={{color: 'cyan'}} href="https://discord.com/api/oauth2/authorize?client_id=970176524110147605&permissions=275149548624&scope=bot">Invite Rosettes</a> into your server.</b><br/>
				<small>You can remove managing-type permissions if you don't want Rosettes for that.<br/>
				Everything else will work just fine!</small></p>
				<p><b>2. [Optional] Check the <a style={{color: 'cyan'}} href="https://snep.markski.ar/rosettes">web panel</a> for available settings.</b><br/>
				<small>The default settings are probably fine for most guilds.</small></p>
				<p><b>3. Done!</b></p>
				<p>
					<small>To see a full list of commands, <a style={{color: 'cyan'}} href="https://snep.markski.ar/rosettes/commands.html">click here</a>.<br/>
					If you wish to support hosting and development of Rosettes, you can <Link href="/donate"><a style={{color: 'cyan'}}>donate</a></Link>.</small>
				</p>
			</div>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>Questions and Answers</p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>
					<b>
						Why "Rosettes"?
					</b>
				</p>
				<p>Rosettes is the name of the pattern on the fur of snow leopards, which I quite like.</p>
				<p>
					<b>
						Are messages logged?
					</b>
				</p>
				<p>
					No, Rosettes keeps logs of nothing.<br/>
					What little data gets stored is not personal beyond usernames, which are public anyways.
				</p>
				<p>
					<b>
						Why does Rosettes not have a Discord group like other bots?
					</b>
				</p>
				<p>
					Rosettes has very few users, there's not much of a community to be built around it.<br/>
					For any inquiries regarding Rosettes, you are more than welcome to contact me directly.
				</p>
				<p>
					<b>
						Where is the source code?
					</b>
				</p>
				<p>
					It is available in it's <a style={{color: 'cyan'}} data-class="link" href="https://github.com/markski1/RosettesDiscord">GitHub repository</a>.
				</p>
				<p>
					<b>
						Can I suggest new features?
					</b>
				</p>
				<p>
					Yes! Feedback is always welcome. To suggest new features, improvements or bug reports, simply contact me.
				</p>
				<p>
					<b>
						How can I contact you?
					</b>
				</p>
				<p>
					With the methods listed at the top of the <Link href="/"><a style={{color: 'cyan'}}>homepage</a></Link>.
				</p>
			</div>
		</Layout>
		</>
	);
}