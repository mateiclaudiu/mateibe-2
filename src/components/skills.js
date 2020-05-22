import { SectionTitle } from "./section-title"
import { TwoBlockLeft, TwoBlockRight } from "./two-block"
import Layout from "./layout"
import React from "react"

export const Skills = ({skillsSet}) =>(
  <div id="skills">
    <SectionTitle title={"Skills"}/>
    <div id="backend" className="skillBlock">
      <TwoBlockLeft skillsSet={skillsSet.edges.filter(({ node }) => node.type === "backend")[0].node}
                    color={"#424555"}
                    image={require("../images/backend-b.png")}/>
    </div>
    <div id="frontend" className="skillBlock">
      <TwoBlockRight skillsSet={skillsSet.edges.filter(({ node }) => node.type === "frontend")[0].node}
                     color={"#007a80"}
                     image={require("../images/frontend-b.png")}/>
    </div>
    <div id="website" className="skillBlock">
      <TwoBlockLeft skillsSet={skillsSet.edges.filter(({ node }) => node.type === "website")[0].node}
                    color={"#d97578"}
                    image={require("../images/website-b.png")}/>
    </div>
    <div id="design" className="skillBlock">
      <TwoBlockRight skillsSet={skillsSet.edges.filter(({ node }) => node.type === "design")[0].node}
                     color={"#424555"}
                     image={require("../images/design-b.png")}/>
    </div>
    <div id="other" className="skillBlock">
      <TwoBlockLeft skillsSet={skillsSet.edges.filter(({ node }) => node.type === "other")[0].node}
                    color={"#007a80"}
                    image={require("../images/mouth-b.png")}/>
    </div>
  </div>
)
