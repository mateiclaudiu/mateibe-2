import { FeatureBlockStyled, FeatureContainerStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import Layout from "./layout"
import React from "react"
import { Link } from "gatsby"
import backendImg from "../images/backend.png"
import designImg from "../images/design.png"
import websiteImg from "../images/website.png"
import frontendImg from "../images/frontend.png"
import styled from "styled-components"
import { TiArrowSortedDown } from "react-icons/ti"


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
    <Bla><img src={img} title={title} alt={title} style={{margin:`0`}}/></Bla>

    <Link to={link} ><TitleStyled style={{ lineHeight: `50px` }} fontSize={"12px"} color={"white"}>MORE</TitleStyled></Link>

  </FeatureBlockStyled>
)

const Feature = () => (
  <FeatureContainerStyled>
    <FeatureBlock color={"#424555"} title={"Backend"} subtitle={""} link={"#backend"} img={backendImg}/>
    <FeatureBlock color={"#007a80"} title={"Web and mobile"} subtitle={""} link={"#frontend"} img={frontendImg}/>
    <FeatureBlock color={"#d97578"} title={"Website"} subtitle={""} link={"#website"} img={websiteImg}/>
    <FeatureBlock color={"#424555"} title={"Architecture/design"} link={"#design"} subtitle={""} img={designImg}/>
  </FeatureContainerStyled>
)

export default Feature
