import { HelloContainerStyled, ItalicTitleStyled, SectionStyled, TitleStyled } from "./styled"
import React from "react"
import { MyDot } from "./mydot"

export const SectionTitle = ({title, subtitle}) => (
  <SectionStyled>
    <TitleStyled fontSize={"3rem"} color={"black"}>{title}<MyDot/></TitleStyled>
{/*
    <ItalicTitleStyled fontSize={"1.1rem"} color={"#707176"}>{subtitle}</ItalicTitleStyled>
*/}
  </SectionStyled>
)

export const SectionTitleForDarkMode = ({title, subtitle}) => (
  <SectionStyled>
    <TitleStyled fontSize={"3rem"} color={"white"}>{title}<MyDot/></TitleStyled>
{/*
    <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>{subtitle}</ItalicTitleStyled>
*/}
  </SectionStyled>
)
