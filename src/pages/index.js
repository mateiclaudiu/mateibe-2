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

const IndexPage = () => {
  const { events, websites } = useStaticQuery(graphql`
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
      }
    }
  `)
  console.log(websites)

  return <Layout>
    <SEO title="Home"/>
    <Intro color={"white"}/>

    <Feature/>

    <PageContainer>
      <Hello/>
    </PageContainer>
    <Banner/>
    <PageContainer>
      <UpcomingEventList events={events.edges}/>
    </PageContainer>
    <div id="contact">
      <Contact/>
    </div>
    <Joinus/>
  </Layout>
}

export default IndexPage
