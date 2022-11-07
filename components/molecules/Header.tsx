import Link from "next/link";

export default function Header() {
	return (
		<header style={{textAlign: 'center'}}>
			<Link href="/">
				<img
					style={{marginLeft: 'auto', marginRight: 'auto'}}
					src="/images/profile.png"
					width={144}
					height={144}
					alt="logo"
					/>
			</Link>
		</header>
	);
}