import Document, { Html, Head, Main, NextScript } from 'next/document';
const gtag = `https://www.googletagmanager.com/gtag/js?id=G-7WFE9MRKS5`;
const isProd = process.env.NODE_ENV === "production"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
			{isProd && (
				<>
					<script async src={gtag} />
					<script 
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
								page_path: window.location.pathname,
							});
							`
						}}
					/>
				</>
			)}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}