import React from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BackToTopStyled } from "./styled"

const top = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const BackToTop = () => (
  <BackToTopStyled>
    <div onClick={top}><AiOutlineArrowUp/></div>
  </BackToTopStyled>
)
