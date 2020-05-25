import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div>
    <SectionTitle title={"Hello & Welcome"} subtitle={"A small introduction"}/>
    <div style={{ fontFamily: "Poppins" }}>
      I am a software developer, with over four years of experience as a consultant for different big organisations in Belgium.
      <br/>
      <br/>
      I can help you with creating your software, web application and/or website.
    </div>
    <ColumnStyled>
      <div>
      </div>
      <div style={{ marginTop: `20px` }}>
      </div>
    </ColumnStyled>
  </div>
)
