import React from "react"
import styled, { css } from "styled-components"

function Banner() {
  const scroll = useScroll()
  return (
    <Container scroll={scroll}>
      <div />
      <Title>
        <H1>
          JAM<Star>&#9734;</Star>
        </H1>
        <H1>stack</H1>
        <H1>SG</H1>
      </Title>
      <Arrow>↯</Arrow>
    </Container>
  )
}

export default Banner

const jumboCss = css`
  font-size: 8rem;
  font-weight: 900;
  font-style: italic;
  margin-top: 3rem;
  margin-bottom: 0px;
  text-shadow: ${({ theme }) => `6px 6px 0 ${theme.colors.sgRed}`};
  @media (max-width: 375px) {
    font-size: 6.5rem;
  }
`

const Container = styled("div").attrs(({ scroll, theme }) => {
  const factor = Math.min(100, scroll / 10 + 50)
  return {
    style: {
      background: `linear-gradient(to bottom right, ${theme.colors.sgRed} 0 ${factor}%, white ${factor}% 100%)`,
    },
  }
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  position: relative;
  * {
    flex: 1;
  }
`
const Title = styled("div")`
  text-align: center;
  color: white;
  margin: 0rem 1rem 0rem 1rem;
  mix-blend-mode: difference;
`

const H1 = styled("h1")`
  ${jumboCss};
  display: inline-block;
  position: relative;
  margin: 0px;
`
const Arrow = styled(H1)`
  display: flex;
  align-items: flex-end;
  bottom: 0rem;
  font-size: 6rem;
`
const Star = styled("span")`
  ${jumboCss};
  font-size: 4rem;
  position: absolute;
  top: 0rem;
  left: -1.5rem;
  font-weight: 100;
  margin-top: 0px;
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`

function useScroll() {
  const [scroll, setScroll] = React.useState(_getCurrentScroll())
  function onScroll() {
    setScroll(_getCurrentScroll())
  }
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })
  return scroll
}

function _getCurrentScroll() {
  if (typeof window === "undefined") return 0
  return window.scrollY
}
