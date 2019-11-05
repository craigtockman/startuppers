import Head from 'next/head'
import Layout from '../components/Layout.js'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function About() {
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
        <meta name='description' content='About startuppers.com' />
        <meta content='en_US' httpEquiv='Content-Language' />
        <link href='https://www.startuppers.com' rel='canonical'></link>

        <meta
          content='https://www.startuppers.com/og_startupers.png'
          property='og:image'
        />
        <meta content='Startup Jobs' property='og:title' />
        <meta content='https://www.startuppers.com' property='og:url' />
        <meta content='About startuppers.com' property='og:description' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@startupers' />
        <meta name='twitter:creator' content='@craigtockman' />
        <meta content='About startuppers.com' name='twitter:description' />
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
      <h2>About us</h2>
      <div className='layout'>
        <p>
          Hi I'm Craig the creator of the word "startupers". Ever since I
          created the word "startupers" in 2006 I've been teased, harassed, and
          generally annoyed by people that believe the word should be spelled
          with 2 "p"s
        </p>
        <p>
          Here is a prime example{' '}
          <a
            href='https://en.wiktionary.org/wiki/startuper#English'
            target='_blank'
          >
            from the Wikipedia
          </a>
          .
        </p>
        <p>
          Often when I was confronted with this dispute I would ask, "Why should
          it have 2 "p"s ?"
        </p>
        <p>"Because the word "upper" has 2 'p's", they would say.</p>
        <p>
          Where I would then ask, "Based on that line of thinking how many "p"s.
          does the word startup have?"
        </p>
        <p>
          In responce they would kindly say, "Excuse me but I need to go get
          another drink before this shit bar closes."
        </p>
        <p>
          Hopefully you see my point. Many don't. Therefore, after many years of
          waiting and way too much money, we were finally able to purchase from
          an internet troll this domain as an attempt to end this dispute.
        </p>
        <p>
          So, since I created the word in San Francisco, in a moment of
          inspiration in 2006 while daydreaming in the basement of a hotel, here
          is my official definition: Which is also in dispute{' '}
          <a
            href='https://en.wiktionary.org/wiki/startupper#English'
            target='_blank'
          >
            by a very annoying person here.
          </a>
        </p>
        <p>
          <strong>
            <i>startupers</i>
          </strong>{' '}
          (singular startuper) (neologism) People who are enthusiastic about the
          formation, creation, and participation in startup business ventures.
        </p>
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
