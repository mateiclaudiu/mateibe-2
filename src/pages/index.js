import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { Hello } from "../components/hello"
import { Banner } from "../components/banner"
import { PageContainer } from "../components/page-container"
import { UpcomingEventList } from "../components/event"
import { Contact } from "../components/contact"
import { Joinus } from "../components/joinus"
import { TwoBlockLeft, TwoBlockRight } from "../components/two-block"
import { SectionTitle } from "../components/section-title"
import { ItalicTitleStyled, LeaderShipStyled, TitleStyled } from "../components/styled"
import styled from "styled-components"
import { Clients } from "../components/clients"

const IndexPage = () => {
  const { events, websites, skillsSet } = useStaticQuery(graphql`
    {    
      events: allEventsJson(sort: {fields: eventDate, order: ASC}) {
        edges {
          node {
            eventDate
            title
            dayNumber
            dayName
            monthName
            info
            place
          }
        }
      },
      skillsSet: allSkillssetJson {
        edges {
          node {
            skills {
              level
              skill
            }
            text
            title
            type
            image
          }
        }
      }
    }
  `)

  console.log(skillsSet.edges.filter(({ node }) => node.type === "backend")[0].node)
  return <Layout>
    <SEO title="Home"/>
    <Intro color={"white"}/>

    <Feature/>

    <PageContainer>
      <Hello/>
    </PageContainer>
    <Banner/>
    {/*    <PageContainer>
      <UpcomingEventList events={events.edges}/>
    </PageContainer>*/}

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
                    color={"#424555"}
                    image={require("../images/website-b.png")}/>
    </div>
    <div id="design" className="skillBlock">
      <TwoBlockRight skillsSet={skillsSet.edges.filter(({ node }) => node.type === "design")[0].node}
                     color={"#d97578"}
                     image={require("../images/design-b.png")}/>
    </div>
    <div id="other" className="skillBlock">
      <TwoBlockLeft skillsSet={skillsSet.edges.filter(({ node }) => node.type === "other")[0].node}
                    color={"#007a80"}
                    image={require("../images/mouth-b.png")}/>
    </div>
    <Clients/>
    <div id="contact">
      <Contact/>
    </div>
    {/*    <Joinus/>*/}
  </Layout>
}

export default IndexPage
