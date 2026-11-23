import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import MenuGroupCard from './MenuGroupCard'
import { MenuListSide } from './MenuListSide'

/**
 * ä¾§è¾¹æŠ½å±‰
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = props => {
  const { siteInfo } = props
  const router = useRouter()
  return (
    <div id='side-bar'>
      <div className='h-52 w-full flex justify-center'>
        <div>
          <div
            onClick={() => {
              router.push('/')
            }}
            className='justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer'>
            {/* å¤´åƒ */}
            <LazyImage
              src={siteInfo?.icon}
              className='rounded-full'
              width={80}
              height={80}
              alt={siteConfig('AUTHOR')}
            />
          </div>
          {/* æ€»è§ˆ */}
          <MenuGroupCard {...props} />
        </div>
      </div>
      {/* ä¾§æ‹‰æŠ½å±‰çš„èœå• */}
      <div className='fg-blog-mobile-section'>
        <div className='fg-blog-mobile-heading'>
          <span>FUSION <em>GURUKOOL</em></span>
          <small>Oracle Cloud Learning Hub</small>
        </div>

        <a
          href='https://www.fusiongurukool.com/hire-project'
          className='fg-blog-mobile-cta'>
          Schedule Discovery Call
          <span aria-hidden='true'>↗</span>
        </a>
      </div>

      <MenuListSide {...props} />
    </div>
  )
}

export default SideBar

