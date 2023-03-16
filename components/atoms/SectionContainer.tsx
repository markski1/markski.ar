import utilStyles from '../../styles/utils.module.css';

export default function SectionContainer({ children }) {
	return (
		<div className={utilStyles.seccion}>
			{children}
		</div>
	);
} 