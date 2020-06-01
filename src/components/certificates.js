import { SectionTitle } from "./section-title"
import Layout from "./layout"
import React from "react"
import styled from "styled-components"
import { FlexContainerStyled, FlexItemStyled, TitleStyled } from "./styled"


export const Certificates = () => (
  <div id="education" style={{filter: `grayscale(0.9)`}}>
    <SectionTitle title={"Education"}/>
    <FlexContainerStyled>
    <FlexItemStyled>
      <img src={require("../images/kdg.jpeg")} alt="KdG Software development" title="KdG Software development"/>
      <TitleStyled fontSize={"1rem"} color={"#d97478"}>Karel de Grote-Hogeschool - Software development</TitleStyled><br/>
    </FlexItemStyled>
    </FlexContainerStyled>
    <FlexContainerStyled>

      <FlexItemStyled>
        <img src={require("../images/aws.png")} alt="AWS Certified Developer - Associate" title="AWS Certified Developer - Associate"/>
        <TitleStyled fontSize={"1rem"} color={"#d97478"}>AWS Certified Developer - Associate</TitleStyled><br/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/oracle.png")} alt="Oracle Certified Associate Java SE 7 Programmer" title="Oracle Certified Associate Java SE 7 Programmer"/>
        <TitleStyled fontSize={"1rem"} color={"#d97478"}>Oracle Certified Associate - Java SE 7 Programmer</TitleStyled><br/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/scrum-alliance.jpeg")} alt="Certified ScrumMaster" title="Certified ScrumMaster"/>
        <TitleStyled fontSize={"1rem"} color={"#d97478"}>Certified ScrumMaster</TitleStyled><br/>
      </FlexItemStyled>
    </FlexContainerStyled>
  </div>
)
