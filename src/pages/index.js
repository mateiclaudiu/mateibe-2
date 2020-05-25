import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { Hello } from "../components/hello"
import { Banner } from "../components/banner"
import { PageContainer } from "../components/page-container"
import { Contact } from "../components/contact"
import { TwoBlockLeft, TwoBlockRight } from "../components/two-block"
import { SectionTitle } from "../components/section-title"
import { Clients } from "../components/clients"
import { Skills } from "../components/skills"
import styled from "styled-components"
import { BackToTop } from "../components/back-to-top"




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
    <SEO title="Software developer" description="Claudiu Matei, a fullstack software developer with frontend and backend skills working as a consultant"/>
    <Intro color={"white"}/>
    <Feature/>
    <PageContainer>
      <Hello/>
    </PageContainer>
    <Banner/>
    {/*    <PageContainer>
      <UpcomingEventList events={events.edges}/>
    </PageContainer>*/}
    <Skills skillsSet={skillsSet}/>
    <Clients/>
    <Contact/>
    {/*    <Joinus/>*/}
    <BackToTop/>
  </Layout>
}

export default IndexPage
