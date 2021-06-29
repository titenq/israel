import Link from 'next/link'

import * as SC from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <SC.Wrapper>
    <Link href={href}>{children}</Link>
  </SC.Wrapper>
)

export default LinkWrapper
