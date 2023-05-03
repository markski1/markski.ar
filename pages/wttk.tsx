import * as React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from '../components/atoms/PageHeader';
import HeadParams from '../components/atoms/HeadParams';
import Section from '../components/molecules/Section';
import QA from '../components/atoms/QA';

export default function Page() {
	return (
		<>
		<HeadParams
			title = 'WTTk, Windows Tweaking Toolkit'
			description = 'The lightweight, feature-complete tool kit for common Windows tweaking that would otherwise require having to dive into the registry or other unfriendly places.'
		/>
		<Layout bgColor='#36275C'>
			<Header>
				<p className={utilStyles.headingLg} style={{marginRight: '30px'}}>WTTk</p>
			</Header>
			<Section title="about">
				<p>
					Windows Tweaking Toolkit is a lightweight, free and open source Windows Tweaking tool.
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
			</Section>

			<Section title="download">
				<p>You can find the download for the latest version of WTTk <a style={{color: 'cyan'}} href="https://github.com/markski1/WinTweakTool/releases/latest" rel="noreferrer" target="_blank">in this page</a>.</p>
				<p>
					WTTk is built for Windows 10.<br/>
					It works on Windows 11, but certain features (such as 'disabling shortcut indicators') are a little buggy. If any problem arises, simply disable the troublesome feature and restart.
				</p>
				<p><small>If you find WTTk useful and wish to help, please consider making a <Link href="/donate"><span style={{color: 'cyan'}}>donation</span></Link>.</small></p>
			</Section>

			<Section title="questions and answers">
				<QA question="Why does WTTk require admin permissions?">
					Admin permissions are required for access to modify registry keys, which is required to apply the tweaks it offers.
				</QA>
				<QA question="Where is the source code?">
					It is available in it's <a style={{color: 'cyan'}} data-class="link" href="https://github.com/markski1/WinTweakTool" rel="noreferrer" target="_blank">GitHub repository</a>.
				</QA>
				<QA question="Why do I get a Windows SmartScreen warning?">
					WTTk is distributed as an unsigned executable, because it's expensive to get a digital signature. Because WTTk is not a popular application, Windows Smartscreen has a tiny dataset to decide if it's a legitimate application or not, and throws a pre-emptive warning. Simply click 'More information', then 'Run anyways'.
				</QA>
				<QA question="WTTk doesn't work, throws an error on launch!">
					WTTk requires the  <Link href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime"><span style={{color: 'cyan'}}>.NET 6.0 Runtime</span></Link> in order to run. Your should already have this if your Windows is up to date, though.
				</QA>
			</Section>
		</Layout>
		</>
	);
}