import * as SC from './styles'

const Main = () => {
  return (
    <SC.Wrapper>
      <SC.Logo
        src="./img/logo.svg"
        alt="Logotipo ReactJS"
        width="250"
        height="55"
      />
      <SC.Title>Curso NextJS</SC.Title>
      <SC.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </SC.Description>
      <SC.Illustration
        src="./img/hero-illustration.svg"
        alt="Programador na frente do computador"
        width="300"
        height="260"
      />
    </SC.Wrapper>
  )
}

export default Main
