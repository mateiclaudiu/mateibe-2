import { SectionTitle } from "./section-title"
import Layout from "./layout"
import React from "react"
import styled from "styled-components"
import { FlexContainerStyled, FlexItemStyled, TitleStyled } from "./styled"


export const Certificates = () => (
  <div id="certificates" style={{filter: `grayscale(0.8)`}}>
    <SectionTitle title={"Certificates"}/>

    <FlexContainerStyled>
      <FlexItemStyled>
        <img src={require("../images/aws.png")} alt="AWS Certified Developer - Associate" title="AWS Certified Developer - Associate"/>
        <TitleStyled fontSize={"1rem"} color={"#d97478"}>AWS Certified Developer - Associate</TitleStyled><br/>
      </FlexItemStyled> <FlexItemStyled>
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
