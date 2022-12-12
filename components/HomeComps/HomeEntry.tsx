import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function PrintEntry(props: { url: string; text: string; title: string; target?: string }) {
	return (
		<div className={utilStyles.entry}>
			<h3>
				<Link href={props.url} rel="noreferrer" target={props.target} >
					{props.title}
				</Link>
			</h3>
			<p style={{color: 'darkgray'}}>
				{props.text}
			</p>
		</div>
	);
} 