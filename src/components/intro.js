import React from "react"
import { IntroColorStyled, Title3Styled, TitleStyled, TrackingInContractTextStyled } from "./styled"
import { MyDot } from "./mydot"
import Typewriter from "typewriter-effect"

const Intro = ({ color }) => (
  <IntroColorStyled color={color}>
    <div style={{ margin: `auto` }}>
      <TitleStyled fontSize={"3em"} color={"#007a80"}>software development<MyDot/></TitleStyled>
      <TrackingInContractTextStyled><Title3Styled fontSize={"1.3em"} color={"#d97478"}>step by step to big improvement</Title3Styled></TrackingInContractTextStyled>


      <Typewriter
        className={"typeWriter"}
        options={{ cursor: "", loop: true, delay: 50 }}
        onInit={(typewriter) => {
          let passionForImprovementAndCrafting = "a freelance developer with passion for improvement and crafting"
          let aProudHusband = "a proud husband and father"
          let loveJammingOnMyKORG = "love jamming on my KORG"
          let aPeopleGuy = "a people guy"
          typewriter
            .pauseFor(1500)
            .typeString("Hello World! ")
            .typeString("I am Claudiu Matei")
            .pauseFor(1000)
            .deleteChars(13)
            .typeString(passionForImprovementAndCrafting)
            .pauseFor(1000)
            .changeDeleteSpeed(2)
            .deleteChars(passionForImprovementAndCrafting.length)
            .typeString("<strong><span style=\"color: #f7a145;\">im</span><span style=\"color: #007a80;\">agin</span><span style=\"color:" +
              " #d97578;\">ativ</span><span style=\"color: #424555;\">e</span>")
            .pauseFor(1000)
            .deleteChars(11)
            .typeString(aProudHusband)
            .pauseFor(1000)
            .deleteChars(aProudHusband.length)
            .typeString(aPeopleGuy)
            .pauseFor(1000)
            .deleteChars(aPeopleGuy.length+4)
            .typeString(loveJammingOnMyKORG)
            .pauseFor(1000)
            .start()
        }}
      />
    </div>
  </IntroColorStyled>
)

export default Intro
