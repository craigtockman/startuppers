import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
      <div className='copyright'>
        <a href='https://twitter.com/@startupers/'>
          <TwitterIcon
            height='24px'
            width='24px'
            color='action'
            titleAccess='Startupers on Twitter'
          />
        </a>
        <a href='https://www.linkedin.com/company/startupers'>
          <LinkedInIcon
            height='24px'
            width='24px'
            color='action'
            titleAccess='Startupers on LinkedIn'
          />
        </a>
        <a href='https://www.facebook.com/startupers/'>
          <FacebookIcon
            height='24px'
            width='24px'
            color='action'
            titleAccess='Startupers on facebook'
          />
        </a>
        <span className='copytext'>
          Copyright &copy; {year} Startupers<span className='reg'>&reg;</span>
        </span>
      </div>
      <style jsx>
        {`
          footer {
            margin-top: 32px;
          }
          .copyright {
            align-items: center;
            justify-content: flex-start;
            text-align: right;
            display: flex;
            padding: 20px 0 0;
          }
          .copytext {
            position: relative;
          }
          .reg {
            position: absolute;
            top: -5px;
            font-size: 10px;
          }
          @media (min-width: 680px) {
            .copyright {
              justify-content: flex-end;
              padding: 20px 10px 0;
            }
          }
        `}
      </style>
    </footer>
  )
}
