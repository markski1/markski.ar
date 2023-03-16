import SectionContainer from '../atoms/SectionContainer';
import SectionTitle from '../atoms/SectionTitle';

export default function Section(props) {
	return (
		<>
            <SectionTitle>
                {props.title}
            </SectionTitle>
            <SectionContainer>
                {props.children}
            </SectionContainer>
        </>
	);
} 