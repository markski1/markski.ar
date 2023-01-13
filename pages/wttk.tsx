import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from '../components/molecules/PageHeader';
import SectorContainer from '../components/molecules/SectorContainer';

export default function Page() {
	return (
		<>
		<Head>
			<title>WTTk, a Windows Tweaking Tool.</title>
			<meta
				name="description"
				content="The lightweight, feature-complete tool kit for common Windows tweaking that would otherwise require having to dive into the registry or other unfriendly places."
			/>
			<meta name="og:title" content="WTTk, the Windows Tweaking Toolkit" />
		</Head>
		<Layout>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>WTTk</p>
			</Header>
			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>about</p>
			</div>
			<SectorContainer>
				<p>
					<b>W</b>indows <b>T</b>weaking <b>T</b>ool<b>k</b>it is a light weight, free and open source Windows Tweaking tool.
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
			</SectorContainer>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>download</p>
			</div>
			<SectorContainer>
				<p>You can find the download for the latest version of WTTk <a style={{color: 'cyan'}} href="https://github.com/markski1/WinTweakTool/releases/latest" rel="noreferrer" target="_blank">in this page</a>.</p>
				<p>
					WTTk has only been tested on Windows 10.<br/>
					It -should- work on Windows 11, and it'll -likely- work on 8/8.1, but I cannot guarantee these.
				</p>
				<p><small>If you find WTTk useful and wish to help, please consider making a <Link href="/donate"><span style={{color: 'cyan'}}>donation</span></Link>.</small></p>
			</SectorContainer>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>questions and answers</p>
			</div>
			<SectorContainer>
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
					It is available in it's <a style={{color: 'cyan'}} data-class="link" href="https://github.com/markski1/WinTweakTool" rel="noreferrer" target="_blank">GitHub repository</a>.
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
					With the methods listed at the top of the <Link href="/"><span style={{color: 'cyan'}}>homepage</span></Link>.
				</p>
				<p>
					<b>
						WTTk doesn't work, throws an error on launch!
					</b>
				</p>
				<p>
					WTTk requires the  <Link href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime"><span style={{color: 'cyan'}}>.NET 6.0 Runtime</span></Link> in order to run. Your should already have this if your Windows is up to date, though.
				</p>
			</SectorContainer>
		</Layout>
		</>
	);
}