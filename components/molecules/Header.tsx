import styles from '../layout.module.css';
import Link from "next/link";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div style={{float: 'left'}}>
					<img
						src="/images/profileThemed.png"
						width={144}
						height={144}
						alt="logo"
						/>
				</div>
				<div style={{float: 'right', textAlign: 'right', marginTop: '0.5rem'}}>
					<span>
						<Link className={styles.headerLinks} href="/">home</Link><br/>
						<Link className={styles.headerLinks} href="/rosettes">rosettes</Link><br/>
						<Link className={styles.headerLinks} href="wttk">wttk</Link><br/>
						<Link className={styles.headerLinks} href="calc">calc impuestos</Link>
					</span>
				</div>
				<div style={{clear: 'both'}}></div>
			</div>
		</header>
	);
}