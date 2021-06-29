import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="Israel"
      description="Página com pontos de interesse em Israel."
    />
    <LinkWrapper href="/sobre">
      <InfoOutline size={32} aria-label="Sobre" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
