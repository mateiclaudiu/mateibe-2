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
        <a href="https://www.dpgmedia.be/nl" target="_blank">
          <img src={require("../images/clients/dpg-media.svg")} alt="DPG Media" title="DPG Media"/>
        </a>
      </FlexItemStyled>
      <FlexItemStyled>
        <a href="https://www.nobelbiocare.com/" target="_blank">
          <img src={require("../images/clients/nobel-biocare.png")} alt="Nobel Biocare" title="Nobel Biocare"/>
        </a>
      </FlexItemStyled>
      <FlexItemStyled>
        <a href="https://www.cheops.com/" target="_blank">
          <img src={require("../images/clients/logo-cheops.svg")} style={{ height: "3rem" }} alt="Cheops" title="Cheops"/>
        </a>
      </FlexItemStyled>
      <FlexItemStyled>
        <a href="https://www.abvv.be/" target="_blank">
          <img src={require("../images/clients/ABVV-FGTB.png")} alt="ABVV-FGTB" title="ABVV-FGTB"/>
        </a>
      </FlexItemStyled>
      <FlexItemStyled>
        <a href="https://www.digipolis.be/" target="_blank">
          <img src={require("../images/clients/digipolis.png")} alt="Digipolis" title="Digipolis"/>
        </a>
      </FlexItemStyled>
      <FlexItemStyled>
        <a href="https://cronos-groep.be" target="_blank">
        <img src={require("../images/clients/cronos-groep.png")} alt="Cronos" title="CronosCronos"/>
        </a>
      </FlexItemStyled>
      <FlexItemStyled>
        <a href="https://dejuristen.be/" target="_blank">
        <img src={require("../images/clients/de-juristen.jpg")} style={{ height: "7rem" }} alt="De Juristen" title="De Juristen"/>
        </a>
      </FlexItemStyled>
    </FlexContainerStyled>
  </div>
)
