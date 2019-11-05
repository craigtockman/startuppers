import Head from 'next/head'
import Layout from '../components/Layout.js'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Index() {
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
          content='Got to startupers with one p. There you can post startup jobs for FREE.'
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
          content='Got to startupers with one p. There you can post startup jobs for FREE.'
          property='og:description'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@startupers' />
        <meta name='twitter:creator' content='@craigtockman' />
        <meta
          content='Got to startupers with one p. There you can post startup jobs for FREE.'
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
        <link
          href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          rel='stylesheet'
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
      <h2>Wrong. It's "Startupers" with one "p".</h2>
      <div className='layout'>
        <div className='box-l'>
          <a href='https://www.startupers.com'>
            <img src='/milty3.jpg' alt='Milton Hasselbury' />
          </a>
          <p>Tell them Milton Hasselbury sent you.</p>
        </div>
        <div className='box-r'>
          <p>Need a job in a startup? You've come to the wrong place!</p>
          <p>
            Go to <a href='https://www.startupers.com'>Startupers.com</a> with
            one "p"
          </p>
          <p>
            Where you can find the coolest{' '}
            <a href='https://www.startupers.com'>startup jobs</a>.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          p {
            margin: 0 0 20px;
          }
          .box-r {
            padding: 20px 0;
          }
          .box-r {
            font-size: 20px;
            line-height: 26px;
          }
          @media (min-width: 840px) {
            .box-l {
              min-width: 500px;
            }
            .box-r {
              padding: 0 20px;
            }
            .layout {
              display: flex;
            }
          }
        `}
      </style>
    </Layout>
  )
}
