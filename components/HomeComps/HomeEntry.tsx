import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function PrintEntry(props: { url: string; text: string; title: string; }) {
	return (
		<div className={utilStyles.entry}>
			<p>
				<h3>
					<Link href={props.url} >
						<a>{props.title}</a>
					</Link>
				</h3>
				<br/>
				{props.text}
			</p>
		</div>
	);
} 