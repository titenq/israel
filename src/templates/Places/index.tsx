import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { NextSeo } from 'next-seo'

import * as SC from './styles'
import LinkWrapper from 'components/LinkWrapper/index'

export type ImageProps = {
  url: string
  width: number
  height: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Israel`}
        description={place.description?.text || `${place.name} - Israel`}
        canonical="https://titenq.vercel.com/israel"
        openGraph={{
          url: 'https://titenq.vercel.com/israel',
          title: `${place.name} - Israel`,
          description: place.description?.text || `${place.name} - Israel`,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Voltar para o mapa" />
      </LinkWrapper>

      <SC.Wrapper>
        <SC.Container>
          <SC.Heading>{place.name}</SC.Heading>

          <SC.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <SC.Gallery>
            {place.gallery &&
              place.gallery.map((img, index) => (
                <Image
                  key={`${index}-${place.name}`}
                  src={img.url}
                  alt={place.name}
                  width={img.width}
                  height={img.height}
                  quality={75}
                  objectFit="cover"
                />
              ))}
          </SC.Gallery>
        </SC.Container>
      </SC.Wrapper>
    </>
  )
}

export default PlaceTemplate
