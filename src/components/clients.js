import { SectionTitle } from "./section-title"
import Layout from "./layout"
import React from "react"
import styled from "styled-components"
import { FlexContainerStyled, FlexItemStyled } from "./styled"



export const Clients = () => (
  <div id="projects-experience">
    <SectionTitle title={"Project experience"}/>

    <FlexContainerStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/dpg-media.svg")} alt="DPG Media"/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/nobel-biocare.png")} alt="Nobel Biocare"/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/logo-cheops.svg")} style={{height:'3rem'}} alt="Cheops"/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/ABVV-FGTB.png")} alt="ABVV-FGTB"/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/digipolis.png")} alt="Digipolis"/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/cronos-groep.png")} alt="Cronos"/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/de-juristen.jpg")} style={{height:'7rem'}} alt="De Juristen"/>
      </FlexItemStyled>
    </FlexContainerStyled>
  </div>
)
