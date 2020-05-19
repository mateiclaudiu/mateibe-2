import { FeatureBlockStyled, FeatureContainerStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import Layout from "./layout"
import React from "react"
import { Link } from "gatsby"
import backendImg from "../images/backend.png"
import designImg from "../images/design.png"
import websiteImg from "../images/website.png"
import frontendImg from "../images/frontend.png"
import styled from "styled-components"


const Bla = styled.div`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FeatureBlock = ({title, subtitle, color, link, img})=>(
  <FeatureBlockStyled backgroundColor={color}>
    <TitleStyled fontSize={"30px"} color={"white"}>{title}</TitleStyled>
    <ItalicTitleStyled fontSize={"17px"} color={"white"}>{subtitle}</ItalicTitleStyled>
    <Bla><img src={img} style={{margin:`0`}}/></Bla>
    <Link to={link} ><TitleStyled style={{ lineHeight: `50px` }} fontSize={"12px"} color={"white"}>ONTDEK MEER</TitleStyled></Link>
  </FeatureBlockStyled>
)

const Feature = () => (
  <FeatureContainerStyled>
    <FeatureBlock color={"#424555"} title={"Frontend"} subtitle={"Donec facilisis fermentum sem viverra"} link={"/onze-gemeenschap"} img={frontendImg}/>
    <FeatureBlock color={"#007a80"} title={"Backend"} subtitle={"Donec facilisis fermentum sem viverra"} img={backendImg}/>
    <FeatureBlock color={"#d97578"} title={"Website"} subtitle={"Donec facilisis fermentum sem viverra"} link={"/onze-gemeenschap#doe-met-ons-mee"} img={websiteImg}/>
    <FeatureBlock color={"#f7a145"} title={"Architecture/design"} subtitle={"Donec facilisis fermentum sem viverra"} img={designImg}/>
  </FeatureContainerStyled>
)

export default Feature
