import utilStyles from '../../styles/utils.module.css';

export default function SectionTitle({ children }) {
	return (
		<div className={utilStyles.centerContainer}>
				<p className={utilStyles.headingMd}>{children}</p>
			</div>
	);
} 