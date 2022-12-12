import utilStyles from '../../styles/utils.module.css';

export default function SectorContainer({ children }) {
	return (
		<div className={utilStyles.seccion}>
			{children}
		</div>
	);
} 