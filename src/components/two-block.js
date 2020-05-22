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

const ColorBlock = ({title, websiteImg, color}) =>(
  <TwoBlockImgStyled background_color={color}>
    <TitleStyled fontSize={"1.5rem"} color={"white"}>{title}</TitleStyled>
    <img src={websiteImg}/>
  </TwoBlockImgStyled>
)

const WhiteBlock = ({skills, color}) => (
  <TwoBlockTextStyled background_color={"white"} id="doe-met-ons-mee" border_color={color}>
    {
      skills.map((s) => (
        <SkillBar skill={s.skill} level={s.level} color={color}/>
      ))}
  </TwoBlockTextStyled>

)

export const TwoBlockLeft = ({ skillsSet, subtitle, children, image, color }) => (
    <JoinUsBannerStyled>
      <ColorBlock title={skillsSet.title} websiteImg={image} color={color}/>
      <WhiteBlock  skills={skillsSet.skills} color={color}/>
    </JoinUsBannerStyled>
)

export const TwoBlockRight = ({ skillsSet, subtitle, children, type, image,color }) => (
    <JoinUsBannerStyled>
      <WhiteBlock  skills={skillsSet.skills} color={color}/>
      <ColorBlock title={skillsSet.title} websiteImg={image} color={color}/>
    </JoinUsBannerStyled>
)
