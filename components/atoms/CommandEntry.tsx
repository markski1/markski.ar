export default function CommandEntry(props: { appCommand?: boolean; name: string; description: string; parameters?: string;}) {
	let cmdtxt: JSX.Element;
	if (props.appCommand) {
		cmdtxt = <><br/><small style={{color: 'darkgray'}}>&nbsp;Available as an application feature.</small></>;
	}
	return (
		<p>
			<big><b>{props.name} <small>{props.parameters}</small></b></big>
			<br/>{props.description}
			{cmdtxt}
		</p>
	);
} 