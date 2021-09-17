import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div id="hello">
    <SectionTitle title={"Hello & Welcome"} subtitle={"A small introduction"}/>
    <div style={{ fontFamily: "Poppins" }}>
      Matei is small and dynamic IT company with a strong team specialized in developing web applications, mobile apps and websites.
      We are stongly focused on quality, open communication and attractive designs.
      <br/>
    </div>
    <ColumnStyled>
      <div>
      </div>
      <div style={{ marginTop: `20px` }}>
      </div>
    </ColumnStyled>
  </div>
)
