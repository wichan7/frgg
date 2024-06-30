import styled from 'styled-components'

type TypographyKey = 'title' | 'titleB' | 'body' | 'bodyB'
type TypographyValue = {
  size: number
  weight: number
}
type Typography = {
  [key in TypographyKey]: TypographyValue
}

// eslint-disable-next-line react-refresh/only-export-components
export const typography: Typography = {
  title: {
    size: 16,
    weight: 400,
  },
  titleB: {
    size: 16,
    weight: 700,
  },
  body: {
    size: 14,
    weight: 400,
  },
  bodyB: {
    size: 14,
    weight: 700,
  },
}

interface TypoProps extends TypographyValue {
  underline?: boolean
}
const Typo = styled.span<TypoProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  ${({ underline }) => !!underline && `text-decoration: underline;`}
`

export default Typo
