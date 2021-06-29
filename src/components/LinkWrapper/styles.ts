import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;
  z-index: 1100;

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
