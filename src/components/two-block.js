import React from "react"
import {
  JoinUsBannerStyled,
  JoinUsTextStyled,
  TitleStyled,
  TwoBlockImgStyled, TwoBlockTextStyled,
} from "./styled"
import websiteImg from "../images/website-b.png"
import { SkillBar } from "./skillbar"
import { Event } from "./event"
import styled from "styled-components"

export const DesktopFlexedStyled = styled.div`
  display: flex;
  flex-flow: wrap;
  font-family: Poppins;
  @media (min-width: 1200px) {
    flex-flow: row;
  }
  
  img {
    //margin-bottom: 0;
    height: 6rem;
    @media (min-width: 1200px) {
      height: auto;
    }
  }
  
  span {
    padding-left: 0;
    padding-right: 0;
     @media (min-width: 1200px) {
      padding: 1rem;
    }
  }
`

const ColorBlock = ({ title, websiteImg, color, text }) => (
  <TwoBlockImgStyled background_color={color}>
    <TitleStyled fontSize={"1.5rem"} color={"white"}>{title}</TitleStyled>
    <DesktopFlexedStyled>
      <img src={websiteImg}/>
      <span dangerouslySetInnerHTML={{ __html: text }}/>
    </DesktopFlexedStyled>
  </TwoBlockImgStyled>
)

const WhiteBlock = ({ skills, color }) => (
  <TwoBlockTextStyled background_color={"white"} id="doe-met-ons-mee" border_color={color}>
    {
      skills.map((s) => (
        <SkillBar skill={s.skill} level={s.level} color={color}/>
      ))}
  </TwoBlockTextStyled>

)

export const TwoBlockLeft = ({ skillsSet, subtitle, children, image, color }) => (
  <JoinUsBannerStyled>
    <ColorBlock title={skillsSet.title} text={skillsSet.text} websiteImg={image} color={color}/>
    <WhiteBlock skills={skillsSet.skills}  color={color}/>
  </JoinUsBannerStyled>
)

export const TwoBlockRight = ({ skillsSet, subtitle, children, type, image, color }) => (
  <JoinUsBannerStyled>
    <WhiteBlock skills={skillsSet.skills} color={color}/>
    <ColorBlock title={skillsSet.title} text={skillsSet.text} websiteImg={image} color={color}/>
  </JoinUsBannerStyled>
)
