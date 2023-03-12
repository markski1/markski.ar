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
			<title>WTTk, a Windows Tweaking Toolkit - markski.ar</title>
			<meta
				name="description"
				content="The lightweight, feature-complete tool kit for common Windows tweaking that would otherwise require having to dive into the registry or other unfriendly places."
			/>
			<meta name="og:title" content="WTTk, the windows tweaking toolkit - markski.ar" />
			<meta property="og:image" content="https://markski.ar/images/profileDesplacement.png" />
			<meta property="og:description" content="The lightweight, feature-complete tool kit for common Windows tweaking that would otherwise require having to dive into the registry or other unfriendly places." />
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
					<li>Ability to change and disable many Windows behaviours which cannot be changed from any of Windows' front-facing UI.</li>
					<li>A shutdown scheduler.</li>
				</ul>
					<img style={{margin: 'auto'}}src="./images/wttk.png" />
				<p>Most important of all, WTTk is in active development, and always accepting feedback and suggestions for new features.</p>
			</SectorContainer>

			<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>download</p>
			</div>
			<SectorContainer>
				<p>You can find the download for the latest version of WTTk <a style={{color: 'cyan'}} href="https://github.com/markski1/WinTweakTool/releases/latest" rel="noreferrer" target="_blank">in this page</a>.</p>
				<p>
					WTTk is built for Windows 10.<br/>
					It works on Windows 11, but certain features (such as 'disabling shortcut indicators') are a little buggy. If any problem arises, simply disable the troublesome feature and restart.
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
						Why do I get a Windows SmartScreen warning?
					</b>
				</p>
				<p>
					WTTk is distributed as an unsigned executable, because it's expensive to get a digital signature. Because WTTk is not a popular application, Windows Smartscreen has a tiny dataset to decide if it's a legitimate application or not, and throws a pre-emptive warning. Simply click 'More information', then 'Run anyways'.
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