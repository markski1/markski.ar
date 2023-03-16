export default function PageHeader(props) {
	return (
        <>
            <p>
                <b>
                    {props.question}
                </b>
            </p>
            <p style={{marginLeft: '1rem'}}>
                {props.children}
            </p>
        </>
	);
} 