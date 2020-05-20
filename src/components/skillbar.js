import React from "react"
import styled from "styled-components"

const MeterStyled = styled.div`
  height: 5px;
  position: relative;
  background: #f3efe6;
  overflow: hidden;
  
  span {
  display: block;
  height: 100%;

}
`

const MeterProgressStyled = styled.span`
  background-color: ${props => props.color};
  -webkit-animation: progressBar 3s ease-in-out;
  -webkit-animation-fill-mode:both;
  -moz-animation: progressBar 3s ease-in-out;
  -moz-animation-fill-mode:both;
`


export const SkillBar = ({skill, level, color}) => (
  <div>
    <div style={{
      marginTop: "15px",
      fontSize: "0.7rem",
      fontWeight: "600",
      textTransform:"uppercase"
    }}>
      {skill}
      <MeterStyled>
        <span style={{ width: level+"%" }}><MeterProgressStyled color={color}/></span>
      </MeterStyled>
    </div>
  </div>
)
