import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function PrintEntry(props: { spanishOnly?: boolean; url: string; text: string; title: string; target?: string }) {
	let sptxt: JSX.Element;
	if (props.spanishOnly) {
		sptxt = <>&nbsp;<span style={{fontSize: '0.8rem', color: 'gray'}}>spanish only</span><br/></>;
	}
	// I don't capitalize in descriptions
	let description:string = props.text.toLowerCase();
	
	return (
		<div className={utilStyles.entry}>
			<h3 style={{marginBottom: "-1.2rem"}}>
				<Link href={props.url} rel="noreferrer" target={props.target} >
					{props.title}
				</Link>
				{sptxt}
			</h3>
			<p style={{color: 'darkgray'}}>
				{description}
			</p>
		</div>
	);
}