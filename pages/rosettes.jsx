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
			<center>
				<p className={utilStyles.headingLg}>About Rosettes</p>
			</center>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>
					Rosettes is a simple, free-to-use Discord bot.
				</p>
				<p>
					It's functions include, but are not limited to:
				</p>
				<ul>
					<li>Dice-rolling and coin-flipping commands.</li>
					<li>Plays music off Youtube, Yandex, Soundcloud and Bandcamp.</li>
					<li>Checking the status of certain game servers.</li>
					<li>Can display information about a given user or guild.</li>
					<li>Can extract video files off twitter links.</li>
				</ul>
			</div>

			<center>
				<p className={utilStyles.headingLg}>Using Rosettes</p>
			</center>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>Simply invite Rosettes into your server. <a style={{color: 'cyan'}} href="https://discord.com/api/oauth2/authorize?client_id=970176524110147605&permissions=3198016&scope=bot">Click here</a>.</p>
				<p>To see a full list of commands, <a style={{color: 'cyan'}} href="https://snep.mrks.cf/rosettes/commands.html">click here</a>.</p>
				<p>If you want to help cover server costs, and increase how much time I can put into improving it, you can <Link href="/donate"><a style={{color: 'cyan'}}>donate</a></Link>.</p>
			</div>

			<center>
				<p className={utilStyles.headingLg}>Questions and Answers</p>
			</center>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>
					<b>
						Why "Rosettes"?
					</b>
				</p>
				<p>Rosettes is the name of the pattern on the fur of snow leopards, which I quite like.</p>
				<p>
					<b>
						How do you set it up?
					</b>
				</p>
				<p>You don't have to. Rosettes is meant to be simple and works as-is out of the box. Replies were made to be as compact and non-spammy as possible.</p>
				<p>
					<b>
						Are messages logged?
					</b>
				</p>
				<p>
					No. No messages or personal information are stored in the server.<br/>
					This way, in the very unlikely scenario that something gets breached, there's no data to steal.
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
					It is available in it's <a style={{color: 'cyan'}} class="link" href="https://github.com/markski1/RosettesDiscord">GitHub repository</a>.
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