import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div id="hello">
    <SectionTitle title={"Hello & Welcome"} subtitle={"A small introduction"}/>
    <div style={{ fontFamily: "Poppins" }}>
      Hey! Nice to have you here. Let me introduce myself. I am Claudiu Matei, a software developer with over five years of experience as a consultant for different big organisations in Belgium like DPG Media, Nobel Biocare, ABVV etc.
      I like to work on front as backend projects, where there is focus on good design and architecture.

      <br/>
      <br/>
      So how I could help you? I can help you with creating your software, web application and/or website.
    </div>
    <ColumnStyled>
      <div>
      </div>
      <div style={{ marginTop: `20px` }}>
      </div>
    </ColumnStyled>
  </div>
)
