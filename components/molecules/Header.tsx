import styles from '../layout.module.css';
import Logo from '../atoms/Logo';
import Link from "next/link";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div style={{float: 'left'}}>
					<Logo />
				</div>
				<div style={{float: 'right', textAlign: 'right', marginTop: '0.5rem', marginRight: '0.25rem'}}>
					<span>
						<Link className={styles.headerLinks} href="/">home</Link><br/>
						<Link className={styles.headerLinks} href="/rosettes">rosettes</Link><br/>
						<Link className={styles.headerLinks} href="/wttk">wttk</Link><br/>
						<Link className={styles.headerLinks} href="/calculando">calculando</Link>
					</span>
				</div>
				<div style={{clear: 'both'}}></div>
			</div>
		</header>
	);
}