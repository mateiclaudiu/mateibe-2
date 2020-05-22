import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IntroColorStyled, ItalicTitleStyled, TitleStyled, TrackingInContractTextStyled } from "./styled"
import { MyDot } from "./mydot"
import Typewriter from "typewriter-effect"
import { GiPianoKeys } from 'react-icons/gi';

const firstText = "a <strong>developer</strong> with passion for <strong>improvement</strong> and <strong>crafting</strong>"
const secondText = "<strong><span style=\"color: #f7a145;\">im</span><span style=\"color: #007a80;\">agin</span><span style=\"color:" +
  " #d97578;\">ativ</span><span style=\"color: #424555;\">e</span>"
const thirdText = "a <strong>proud</strong> fiancé"
const fourthText = "LOVE jamming on my Korg"

const Intro = ({ color }) => (
  <IntroColorStyled color={color}>
    <div style={{ margin: `auto` }}>
      <TitleStyled fontSize={"6em"} color={"#007a80"}>matei<MyDot/></TitleStyled>
      <TrackingInContractTextStyled><TitleStyled fontSize={"1.5em"} color={"#d97478"}>Freelance Developer</TitleStyled></TrackingInContractTextStyled>


      <Typewriter
        className={"typeWriter"}
        options={{ cursor: "", loop: true }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString("Hello World! ")
            .pauseFor(500)
            .typeString("I am Claudiu Matei")
            .pauseFor(1000)
            .deleteChars(13)
            .typeString(firstText)
            .pauseFor(1000)
            .changeDeleteSpeed(2)
            .deleteChars(firstText.length - (17 * 3))
            .typeString(secondText)
            .pauseFor(1000)
            .deleteChars(11)
            .typeString(thirdText)
            .pauseFor(1000)
            .deleteChars(thirdText.length - 13)
            .typeString(fourthText)
            .pauseFor(1000)
            .start()
        }}
      />
    </div>
  </IntroColorStyled>
)

export default Intro
