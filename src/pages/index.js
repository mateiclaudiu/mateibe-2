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

  console.log(skillsSet.edges.filter(({node})=> node.type==="backend")[0].node)
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
    <TwoBlockLeft skillsSet={skillsSet.edges.filter(({node})=> node.type==="backend")[0].node} color={"#424555"} image={require('../images/backend-b.png')}/>
    <TwoBlockRight skillsSet={skillsSet.edges.filter(({node})=> node.type==="frontend")[0].node} color={"#007a80"} image={require('../images/frontend-b.png')}/>
    <TwoBlockLeft skillsSet={skillsSet.edges.filter(({node})=> node.type==="website")[0].node} color={"#d97578"} image={require('../images/website-b.png')}/>
    <TwoBlockRight skillsSet={skillsSet.edges.filter(({node})=> node.type==="design")[0].node} color={"#f7a145"} image={require('../images/design-b.png')}/>

    <div id="contact">
      <Contact/>
    </div>
{/*    <Joinus/>*/}
  </Layout>
}

export default IndexPage
