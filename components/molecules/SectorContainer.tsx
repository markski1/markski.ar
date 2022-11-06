import utilStyles from '../../styles/utils.module.css';

export default function SectorContainer({ children }) {
	return (
		<div className={`${utilStyles.headingContainer} ${utilStyles.bodyMod}`} style={{padding: '10px 20px'}}>
			{children}
		</div>
	);
} 