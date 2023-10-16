import * as React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import HeadParams from '../components/atoms/HeadParams';

export default function Page() {
	return (
		<>
		<HeadParams
			title = '404'
			description = 'This page does not exist.'
		/>
		<Layout type='page'>
            <div className={utilStyles.headingContainer} style={{minWidth: '20rem'}}>
                <h2 className={utilStyles.headingLg}>four oh four</h2>
            </div>
            <p>Whatever you might be looking for is not here.</p>
		</Layout>
		</>
	);
}