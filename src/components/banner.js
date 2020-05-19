import { BannerImgStyled, BannerStyled, BannerTextStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import clau from "../images/clau.jpeg"

export const Banner = () => (
  <BannerStyled>
    <BannerImgStyled>
      <img src={clau} style={{ borderRadius: `50%`, width:`12rem`}}/>
    </BannerImgStyled>
    <BannerTextStyled>
      <TitleStyled fontSize={"30px"} color={"white"}>Claudiu Matei</TitleStyled>
      <ItalicTitleStyled fontSize={"17px"} color={"#d14f42"}>Voorzitter</ItalicTitleStyled>
      <p style={{
        color: `darkgray`,
        marginTop: `10px`,
      }}></p>
    </BannerTextStyled>
  </BannerStyled>
)
