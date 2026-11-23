import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const currentYear = new Date().getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='fg-corporate-footer'>
      <div className='fg-footer-container'>
        <div className='fg-footer-grid'>

          <div className='fg-footer-brand'>
            <a href='https://www.fusiongurukool.com' className='fg-footer-logo'>
              <span>FUSION <em>GURUKOOL</em></span>
            </a>

            <p className='fg-footer-tagline'>
              Empower Today. Innovate Tomorrow. Grow Forever.
            </p>

            <p className='fg-footer-description'>
              Oracle Cloud consulting, advisory, auditing,
              enterprise solutions and practical technology learning.
            </p>
          </div>

          <div className='fg-footer-column'>
            <h3>Company</h3>
            <a href='https://www.fusiongurukool.com'>Home</a>
            <a href='https://www.fusiongurukool.com/hire-project'>
              Hire a Project
            </a>
            <a href='https://www.fusiongurukool.com/partner'>
              Partner With Us
            </a>
          </div>

          <div className='fg-footer-column'>
            <h3>Oracle Learning</h3>
            <a href='/category'>All Categories</a>
            <a href='/archive'>All Articles</a>
            <a href='/tag'>Topics &amp; Tags</a>
          </div>

          <div className='fg-footer-column'>
            <h3>Get Connected</h3>
            <a href='https://www.fusiongurukool.com/hire-project'>
              Schedule Discovery Call
            </a>
            <a href='https://www.fusiongurukool.com'>
              Visit Main Website
            </a>
          </div>

        </div>

        <div className='fg-footer-bottom'>
          <span>
            © {copyrightDate} Fusion Gurukool. All rights reserved.
          </span>

          <span className='fg-footer-credits'>
            <BeiAnSite />
            <BeiAnGongAn />
            <span className='hidden busuanzi_container_site_pv'>
              <i className='fas fa-eye' />
              <span className='px-1 busuanzi_value_site_pv'> </span>
            </span>
            <span className='hidden busuanzi_container_site_uv'>
              <i className='fas fa-users' />
              <span className='px-1 busuanzi_value_site_uv'> </span>
            </span>
            <PoweredBy className='justify-center' />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
