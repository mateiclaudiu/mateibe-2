import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IntroColorStyled, ItalicTitleStyled, TitleStyled, TrackingInContractTextStyled } from "./styled"
import { MyDot } from "./mydot"

const Intro = ({ color }) => (
  <IntroColorStyled color={color}>
    <div style={{margin:`auto`}}>
      <TitleStyled fontSize={"6em"} color={"#007a80"}>matei<MyDot/></TitleStyled>
      <TrackingInContractTextStyled><TitleStyled fontSize={"1.5em"} color={"#d97478"}>Freelance Developer</TitleStyled></TrackingInContractTextStyled>
    </div>
  </IntroColorStyled>
)

export default Intro
