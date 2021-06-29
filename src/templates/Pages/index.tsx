import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as SC from './styles'
import LinkWrapper from 'components/LinkWrapper/index'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <SC.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Voltar para o mapa" />
    </LinkWrapper>

    <SC.Heading>{heading}</SC.Heading>

    <SC.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </SC.Body>
  </SC.Content>
)

export default PageTemplate
