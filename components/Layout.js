import Header from './Header'
import Footer from '../components/Footer.js'
import Router from 'next/router'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const layoutStyle = {
  margin: '20px auto',
  padding: 20,
  maxWidth: 1200
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font-weight: 400;
            font: inherit;
            vertical-align: baseline;
          }
          body {
            background-color: #f7f7f7;
            font-family: 'Roboto', sans-serif;
            line-height: 1.429em;
            min-width: 0%;
            font-size: 0.875em;
            color: #333;
          }
          h1 {
            font-size: 2.5em;
            font-weight: normal;
            font-family: 'Arial Rounded MT Bold';
            line-height: 1.5;
            margin: 0;
          }
          h2 {
            font-size: 2em;
            line-height: 1.1;
            font-family: 'Arial Rounded MT Bold';
            margin: 0 0 28px;
          }
          h3 {
            font-size: 1.3em;
            font-weight: 600;
          }
          img {
            max-width: 100%;
          }
          @media (min-width: 780px) {
            h1 {
              font-size: 3em;
              line-height: 1.4;
            }
            h2 {
              font-size: 2em;
              line-height: 1;
            }
          }
        `}
      </style>
    </div>
  )
}
