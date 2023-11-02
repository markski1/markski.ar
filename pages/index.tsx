import Grid from '@mui/material/Grid';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import PrintEntry from '../components/atoms/HomeEntry'
import GetIcon from '../components/atoms/Icons';
import HeadParams from '../components/atoms/HeadParams';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }) {
	const sortedPosts = posts.sort((a : any, b : any) => a.frontMatter.order - b.frontMatter.order);
	return (
		<>
		<HeadParams
			title = "Home"
			description = "Desarrollador, estudiante de informatica. / Developer, Comp Sci student."
			/>
		<Layout home>
			<div className={utilStyles.contactCard} style={{maxWidth: '46rem', margin: 'auto'}}>
				<p style={{marginTop: '.5rem'}}>
					I am Juan, a software developer from Argentina.
				</p>
				<span>
					I study computer science in the National University of La Plata.<br />
					Fullstack developer as a hobby, Backend developer for a living.
				</span>
				
				<Grid container columnSpacing={4} rowSpacing={3}>
					<Grid item xs={7}>
						<div style={{minWidth: '20rem', marginBottom: '-1rem', whiteSpace: 'nowrap'}}>
							<p>Domains I work within:</p>
							<ul style={{lineHeight: '1.65'}}>
								<li>Backend development</li>
								<li>Server administration</li>
								<li>Database administration</li>
								<li>Performance analysis</li>
								<li>Automation</li>
							</ul>
						</div>
					</Grid>
					<Grid item xs>
						<div style={{minWidth: '10rem', whiteSpace: 'nowrap'}}>
							<p>Get in touch:</p>
							<span className={utilStyles.listMargin}><GetIcon icon="github" /> <a className={utilStyles.contactLink} href="https://www.github.com/markski1">GitHub</a><br /></span>
							<span className={utilStyles.listMargin}><GetIcon icon="telegram" /> <a className={utilStyles.contactLink} href="https://www.telegram.me/Markski">Telegram</a><br /></span>
							<span className={utilStyles.listMargin}><GetIcon icon="twitter" /> <a className={utilStyles.contactLink} href="https://www.twitter.com/a_markski">X (formerly Twitter)</a><br /></span>
							<span className={utilStyles.listMargin}><GetIcon icon="discord" /> <a className={utilStyles.contactLink} href="discord:markski.ar">Discord: markski.ar</a><br /></span>
							<span className={utilStyles.listMargin}><GetIcon icon="email" /> <a className={utilStyles.contactLink} href="mailto:me@markski.ar">Email: me@markski.ar</a></span>
						</div>
					</Grid>
				</Grid>
			</div>

			<Grid container columnSpacing={8} rowSpacing={3}>
				<Grid item xs>
					<div className={utilStyles.headingContainer} style={{minWidth: '20rem'}}>
						<h2 className={utilStyles.headingLg}>software and services</h2>
					</div>
					<PrintEntry
						title = 'Rosettes'
						url = 'rosettes'
						text = 'simple, free, open source discord bot.'
					/>
					<PrintEntry
						title = 'SAMonitor'
						url = 'samonitor'
						text = 'server monitoring for sa-mp and openmultiplayer.'
					/>
					<PrintEntry
						title = 'WTTk'
						url = 'wttk'
						text = 'enables tweaking hidden windows settings.'
					/>
					<PrintEntry
						title = 'Calculando Argentina'
						url = 'calculando'
						text = 'web app with calculators relevant to argentina.'
						spanishOnly
					/>
					<iframe src="https://status.markski.ar/badge?theme=dark" style={{border: '0px', width: '250px', height: '32px', marginTop: '.5rem', marginLeft: '.5rem'}}></iframe>

					<div className={utilStyles.headingContainer} style={{minWidth: '20rem', marginTop: '2rem'}}>
						<h2 className={utilStyles.headingLg}>repositories and libraries</h2>
					</div>
					<PrintEntry
						title = 'PSXU'
						url = 'https://github.com/markski1/PSXU'
						text = 'single-file php script to upload files on your webserver through sharex for quick sharing.'
						target = '_blank'
					/>
					<PrintEntry
						title = 'ez-steam-api.php'
						url = 'https://github.com/markski1/ez-steam-api.php'
						text = 'object-oriented php interface for easily and quickly requesting data from the steam api.'
						target = '_blank'
					/>
					<PrintEntry
						title = 'tireFuncs'
						url = 'https://github.com/markski1/SAMP-tireFuncs'
						text = 'functions and callbacks for easily handling vehicle tires in sa-mp.'
						target = '_blank'
					/>
					<PrintEntry
						title = 'vModData'
						url = 'https://github.com/markski1/SAMP-vModData'
						text = 'library to obtain information about vehicle components in sa-mp.'
						target = '_blank'
					/>
				</Grid>
				<Grid item xs>
					<div className={utilStyles.headingContainer} style={{minWidth: '20rem'}}>
						<h2 className={utilStyles.headingLg}>blog</h2>
					</div>
					{sortedPosts.map((post: { frontMatter: { title: string; description: string; order: number; date:string }; slug: string; }) => (
						<PrintEntry
							key = {post.frontMatter.order}
							title = {post.frontMatter.title}
							url = {'/blog/' + post.slug}
							text = {post.frontMatter.description}
							date = {post.frontMatter.date}
						/>
					)).reverse()}
				</Grid>
			</Grid>
		</Layout>
		</>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('posts'))
	const posts = files.map(filename => {
	  const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
	  const { data: frontMatter } = matter(markdownWithMeta)
	  return {
		frontMatter,
		slug: filename.split('.')[0]
	  }
	})
	return {
	  props: {
		posts
	  }
	}
  }