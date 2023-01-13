import utilStyles from '../../styles/utils.module.css';

export default function MButton(props: { color: string; text: string, width?: string }) {
	let b_width: string;
	if (props.width) {
		b_width = props.width;
	} else {
		b_width = "auto";
	}
	return (
		<button className={utilStyles.MButton} style={{backgroundColor: props.color, width: b_width}}>
			{props.text}
		</button>
	);
} 