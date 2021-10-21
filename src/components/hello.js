import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div id="hello">
    <SectionTitle title={"Hello & Welcome"} subtitle={"A small introduction"}/>
    <div style={{ fontFamily: "Poppins" }}>
      Matei is small and dynamic IT company, with a strong team, specialized in developing <span style={{color: "#007a80", fontWeight: "600" }}>web applications, mobile apps</span>, <span style={{color: "#424555", fontWeight: "600" }}>backend systems</span> and <span style={{color: "#d97578" , fontWeight: "600"}}>websites</span>.
      We are stongly focused on quality, open communication and attractive designs.
      <br/>
      <br/>
      We were happy to help several major players in Belgium with digital solutions. Our customers are active in various sectors such as the media, medical, public and automotive.
      <br/>
      <br/>
      Regardless of your sector or business type, our experienced team can help you!
    </div>
    <ColumnStyled>
      <div>
      </div>
      <div style={{ marginTop: `20px` }}>
      </div>
    </ColumnStyled>
  </div>
)
