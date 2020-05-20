import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div>
    <SectionTitle title={"Hello & Welcome"} subtitle={"A small introduction"}/>
    <ColumnStyled>
      <div>I will introduce myself a bit later</div>
      <div style={{ marginTop: `20px` }}>
        I am still thinking what I should tell you about myself...
      </div>
    </ColumnStyled>
  </div>
)
