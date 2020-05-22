import { SectionTitle } from "./section-title"
import Layout from "./layout"
import React from "react"
import styled from "styled-components"

const FlexContainerStyled = styled.div`
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    text-align: center;
    margin-bottom: 4rem;

`

const FlexItemStyled = styled.div`
    padding: 0 3rem;
    flex-basis: 33.333333%;
    img {
      height: 5rem;
    }
    
`

export const Clients = () => (
  <div id="projectsExperience">
    <SectionTitle title={"Project experience"}/>

    <FlexContainerStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/dpg-media.svg")}/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/nobel-biocare.png")}/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/digipolis.png")}/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/ABVV-FGTB.png")}/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/cronos-groep.png")}/>
      </FlexItemStyled>
      <FlexItemStyled>
        <img src={require("../images/clients/de-juristen.jpg")}/>
      </FlexItemStyled>
    </FlexContainerStyled>
  </div>
)
