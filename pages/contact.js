import Head from 'next/head'
import Layout from '../components/Layout.js'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Startup Jobs | Startuppers</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <meta
      name='google-site-verification'
      content='0UJy4xnerq2iVGS4M4OABGFP1eAsW-YjD26nm-r2NkE'
    /> */}
        <meta content='notranslate' name='google'></meta>
        <meta
          name='description'
          content='Contact the webmaster at startuppers.com'
        />
        <meta content='en_US' httpEquiv='Content-Language' />
        <link href='https://www.startuppers.com' rel='canonical'></link>

        <meta
          content='https://www.startuppers.com/og_startupers.png'
          property='og:image'
        />
        <meta content='Startup Jobs' property='og:title' />
        <meta content='https://www.startuppers.com' property='og:url' />
        <meta
          content='Contact the webmaster at startuppers.com'
          property='og:description'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@startupers' />
        <meta name='twitter:creator' content='@craigtockman' />
        <meta
          content='Contact the webmaster at startuppers.com'
          name='twitter:description'
        />
        <meta
          content='https://www.startuppers.com/og_startupers.png'
          name='twitter:image:src'
        />
        <meta content='startupers' name='twitter:domain' />
        <link
          href='https://www.startuppers.com/favicon.ico'
          rel='shortcut icon'
        />
        <link
          href='/apple-touch-icon-57x57.png'
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
        />
        <link
          href='/apple-touch-icon-72x72.png'
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
        />
        <link
          href='/apple-touch-icon-114x114.png'
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
        />
        <link
          href='/apple-touch-icon-144x144.png'
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}');
      `
          }}
        />
      </Head>
      <h1>Startuppers</h1>
      <h2>Contact us</h2>
      <div className='layout'>
        <p>
          We'd love to hear any feedback you got on the content of our site.
        </p>
        <p>
          <img src='faqemail_retina_01.png' alt='contact' />
        </p>
        <p>
          <img src='numbers_retina.png' />
        </p>
      </div>
      <style jsx>
        {`
          p {
            font-size: 20px;
            line-height: 26px;
            margin: 0 0 20px;
          }
        `}
      </style>
    </Layout>
  )
}
