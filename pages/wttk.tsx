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
				<title>WTTk, a Windows Tweaking Tool.</title>
				<meta
					name="description"
					content="The lightweight, feature-complete tool kit for common Windows tweaking that would otherwise require having to dive into the registry or other unfriendly places."
				/>
				<meta name="og:title" content="WTTk, the Windows Tweaking Toolkit" />
			</Head>

			<div className={utilStyles.headingContainer}>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>WTTk, the Windows Tweaking Toolkit</p>
			</div>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>About</p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>
					WTTk is a light weight, free and open source Windows Tweaking tool.
				</p>
				<p>
					It's functions include:
				</p>
				<ul>
					<li>Shortcuts to hidden or obscure Windows native tools.</li>
					<li>Ability to change publicly unavailable desktop settings.</li>
					<li>Ability to disable many annoying Windows features.</li>
					<li>A shutdown scheduler.</li>
				</ul>
					<img src="./images/wttk.png" />
				<p>Most important of all, WTTk is in active development, and always accepting feedback for new features.</p>
			</div>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>Download</p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>You can find the download for the lattest version of WTTk <a style={{color: 'cyan'}} href="https://github.com/markski1/WinTweakTool/releases/latest">in this page</a>.</p>
				<p>
					WTTk has only been tested on Windows 10.<br/>
					It -should- work on Windows 11, and it'll -likely- work on 8/8.1, but I cannot guarantee these.
				</p>
				<p><small>If you find WTTk useful and wish to help, please consider making a <Link href="/donate"><a style={{color: 'cyan'}}>donation</a></Link>.</small></p>
			</div>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingLg}>Questions and Answers</p>
			</div>
			<div className={utilStyles.headingContainer} style={{padding: '10px 20px'}}>
				<p>
					<b>
						Why does WTTk require admin permissions?
					</b>
				</p>
				<p>
					Admin permissions are required for access to modify registry keys, which is required to apply the tweaks it offers.
				</p>
				<p>
					<b>
						Where is the source code?
					</b>
				</p>
				<p>
					It is available in it's <a style={{color: 'cyan'}} data-class="link" href="https://github.com/markski1/WinTweakTool">GitHub repository</a>.
				</p>
				<p>
					<b>
						Can I suggest new features?
					</b>
				</p>
				<p>
					Yes! Feedback is always welcome. To suggest new features, improvements or bug reports, simply contact me or post them in the repository above.
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