import utilStyles from '../../styles/utils.module.css';

export default function PageHeader({ children }) {
	return (
		<div className={utilStyles.headingContainer}>
			{children}
		</div>
	);
} 