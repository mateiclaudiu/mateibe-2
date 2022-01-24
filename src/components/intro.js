import React from "react"
import { IntroColorStyled, Title3Styled, TitleStyled, TrackingInContractTextStyled } from "./styled"
import { MyDot } from "./mydot"
import Typewriter from "typewriter-effect"

const Intro = ({ color }) => (
  <IntroColorStyled color={color}>
    <div style={{ margin: `auto` }}>
      <TitleStyled fontSize={"3em"} color={"#007a80"}>software development<MyDot/></TitleStyled>
      <TrackingInContractTextStyled><Title3Styled fontSize={"1.3em"} color={"#d97478"}>building great results step by step</Title3Styled></TrackingInContractTextStyled>


      <Typewriter
        className={"typeWriter"}
        options={{ cursor: "", loop: true, delay: 50 }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString("We develop ")
            .typeString("<strong>fast web applications</strong>")
            .changeDeleteSpeed(2)
            .pauseFor(1000)
            .deleteChars("fast web applications".length)
            .typeString("<strong>user friendly mobile applications</strong>")
            .pauseFor(1000)
            .deleteChars("user friendly mobile applications".length)
            .typeString("<strong>beautiful websites</strong>")
            .pauseFor(1000)
            .deleteChars("beautiful websites".length)
            .typeString("<strong>secure and reliable backend systems</strong>")
            .pauseFor(1000)
            .deleteChars("secure and reliable backend systems".length)
            .start()
        }}
      />
    </div>
  </IntroColorStyled>
)

export default Intro
