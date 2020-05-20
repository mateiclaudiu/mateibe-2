import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div>
    <SectionTitle title={"Hello & Welcome"} subtitle={"A small introduction"}/>
    <ColumnStyled>
      <div>Ik werk al meer als vier jaar als consultant voor verschillende grote klanten in België elks in een verschillend domein. Meer bepaald als fullstack developer.</div>
      <div style={{ marginTop: `20px` }}>

        In zijn samenstelling is de raad een ruimte van ontmoeting en bewustwording
        – een forum voor gesprek en overleg,
        – een werkteam voor gemeenschappelijk pastoraal bekommernis
        – en voor de dienst aan de wereld
        in evangelisch getuigenis en gebed van alle kerken die het doopsel en de weg van de Heer Jezus Christus belijden.
        <br/>
        <br/>
        De Raad van Kerken is verbonden met de internationale oecumenische beweging.
      </div>
    </ColumnStyled>
  </div>
)
