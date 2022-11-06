import utilStyles from '../../styles/utils.module.css';

export default function Header({ children }) {
	return (
		<div className={utilStyles.headingContainer}>
			{children}
		</div>
	);
} 