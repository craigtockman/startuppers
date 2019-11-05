import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <header className='header'>
      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={linkStyle}>About</a>
      </Link>
      <Link href='/contact'>
        <a style={linkStyle}>Contact</a>
      </Link>
      <style jsx global>
        {`
          .header {
            margin: 0 0 20px;
          }
        `}
      </style>
    </header>
  )
}
