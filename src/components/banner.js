import { BannerImgStyled, BannerStyled, BannerTextStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import clau from "../images/clau.jpeg"

export const Banner = () => (
  <BannerStyled>
    <BannerImgStyled>
      <img src={clau} style={{ borderRadius: `50%`, width:`12rem`}}/>
    </BannerImgStyled>
    <BannerTextStyled>
{/*
      <TitleStyled fontSize={"30px"} color={"white"}>Claudiu Matei</TitleStyled>
*/}
{/*
      <ItalicTitleStyled fontSize={"17px"} color={"#d14f42"}>Voorzitter</ItalicTitleStyled>
*/}
      <p style={{
        color: `white`,
        marginTop: `10px`,
        fontSize: `1.3rem`,
        fontStyle: `italic`
      }}>"Every event in your life is an opportunity to broaden your growth and improve yourself.<br/>Be a motivation for others not only by what you say but by what you do."</p> - Claudiu Matei
    </BannerTextStyled>
  </BannerStyled>
)
