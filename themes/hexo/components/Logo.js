import SmartLink from '@/components/SmartLink'

const Logo = () => {
  return (
    <SmartLink href='/' className='fg-blog-brand'>
      <span className='fg-blog-brand-icon' aria-hidden='true'>
        <svg width='23' height='23' viewBox='0 0 24 24'
          fill='none' stroke='currentColor'
          strokeWidth='2.5' strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='m12 2 8 5-8 5-8-5 8-5Z' />
          <path d='m4 12 8 5 8-5' />
          <path d='m4 17 8 5 8-5' />
        </svg>
      </span>

      <span className='fg-blog-brand-text'>
        <strong>FUSION <em>GURUKOOL</em></strong>
        <small>Empower Today. Innovate Tomorrow. Grow Forever.</small>
      </span>
    </SmartLink>
  )
}

export default Logo
