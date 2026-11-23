// import Image from 'next/image'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'
import CONFIG from '../config'
import NavButtonGroup from './NavButtonGroup'

let wrapperTop = 0

/**
 * é¡¶éƒ¨å…¨å±å¤§å›¾
 * @returns
 */
const Hero = props => {
  const { siteInfo } = props
  const { locale } = useGlobal()
  const scrollToWrapper = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
    window.scrollTo({ top: wrapperTop - 2 * rem, behavior: 'smooth' })
  }

  const GREETING_WORDS = siteConfig('GREETING_WORDS')
  const GREETING_WORDS_TYPE_SPEED =
    Number(siteConfig('GREETING_WORDS_TYPE_SPEED')) || 200
  const GREETING_WORDS_BACK_SPEED =
    Number(siteConfig('GREETING_WORDS_BACK_SPEED')) || 100
  useEffect(() => {
    let disposed = false
    let typedInstance
    updateHeaderHeight()

    if (document.getElementById('typed')) {
      loadExternalResource('/js/typed.min.js', 'js')
        .then(() => {
          if (!disposed && window.Typed) {
            typedInstance = new window.Typed('#typed', {
              strings: GREETING_WORDS.split(','),
              typeSpeed: GREETING_WORDS_TYPE_SPEED,
              backSpeed: GREETING_WORDS_BACK_SPEED,
              backDelay: 400,
              showCursor: true,
              smartBackspace: true
            })
          }
        })
        .catch(() => {})
    }

    window.addEventListener('resize', updateHeaderHeight)
    return () => {
      disposed = true
      typedInstance?.destroy()
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [GREETING_WORDS, GREETING_WORDS_TYPE_SPEED, GREETING_WORDS_BACK_SPEED])

  function updateHeaderHeight() {
    requestAnimationFrame(() => {
      const wrapperElement = document.getElementById('wrapper')
      wrapperTop = wrapperElement?.offsetTop
    })
  }

  return (
    <header
      id='header'
      style={{ zIndex: 1 }}
      className='fg-enterprise-hero w-full relative'
    >
      <div className='fg-enterprise-hero-content text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full'>
        {/* ç«™ç‚¹æ ‡é¢˜ */}
        <div className='fg-enterprise-hero-title font-bold text-4xl md:text-5xl'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
        {/* ç«™ç‚¹æ¬¢è¿Žè¯­ */}
        <div className='mt-2 h-12 items-center text-center font-light shadow-text text-lg'>
          <span id='typed' />
        </div>

        {/* é¦–é¡µå¯¼èˆªå¤§æŒ‰é’® */}
        {siteConfig('HEXO_HOME_NAV_BUTTONS', null, CONFIG) && (
          <NavButtonGroup {...props} />
        )}

        {/* æ»šåŠ¨æŒ‰é’® */}
        <div
          onClick={scrollToWrapper}
          className='z-10 cursor-pointer w-full text-center py-4 text-3xl absolute bottom-10 text-white [text-shadow:0_0_0.1em_black,0_0_0.2em_black]'
        >
          <div className='opacity-70 animate-bounce text-xs'>
            {siteConfig('HEXO_SHOW_START_READING', null, CONFIG) &&
              locale.COMMON.START_READING}
          </div>
          <i className='opacity-70 animate-bounce fas fa-angle-down' />
        </div>
      </div>
    </header>
  )
}

export default Hero

