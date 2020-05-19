import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

import communityImage from "../images/community_q_10.jpeg"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import {
  AStyledContainer,
  ButtonStyled,
  FeatureBlockStyled,
  HelloContainerStyled,
  IntroStyled,
  ItalicTitleStyled, JoinUsBannerStyled, JoinUsImageStyled, JoinUsTextStyled, LinkBlockStyled,
  SectionStyled, SmallContactFormStyled,
  TitleStyled,
} from "../components/styled"
import { Hello } from "../components/hello"
import { Banner } from "../components/banner"
import { SectionTitle, SectionTitleForDarkMode } from "../components/section-title"
import { PageContainer } from "../components/page-container"
import { Event, UpcomingEventList } from "../components/event"
import introImage from "../images/together.jpg"
import { LinksContainer } from "../components/links"


const OurCommunityPage = () => {
  const { members } = useStaticQuery(graphql`
    {    
      members: allMembersJson {
        edges {
          node {
            groupName
            url
            members {
              name
              url
            }
          }
        }
      }
    }
  `)

  return <Layout>
    <SEO title="Onze gemeenschap"/>
    <IntroStyled paddingDesktop={"150px 0"} padding={"50px 0"}
                 image={communityImage}>
      <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
      <TitleStyled fontSize={"3rem"} color={"white"}>Het Orgaan</TitleStyled>
      <TitleStyled fontSize={"1.5rem"} color={"white"}>Love, Care, Share</TitleStyled>
    </IntroStyled>
    <PageContainer>
      <SectionTitle title={"Onze gemeenschap"} subtitle={"\"Trek heel de wereld rond en maak aan ieder schepsel het goede nieuws bekend\""}/>
      {
        members.edges.map(({ node }) => (
          <div>
            {node.url? <TitleStyled><a href={node.url}>{node.groupName}</a></TitleStyled>:<TitleStyled>{node.groupName}</TitleStyled>}
            {
              node.members.map((member) => (
                  <LinkBlockStyled>
                    <AStyledContainer>
                      <a href={member.url} target="_blank">- {member.name} </a>
                    </AStyledContainer>
                  </LinkBlockStyled>
                ),
              )
            }
          </div>
        ))
      }
      {/*{websites.edges.map(({ node }) => (
        <LinksContainer groupTitle={node.groupTitle} links={node.links}/>
      ))}
      <div style={{ fontStyle: "italic" }}>
        Had u graag uw website hier vermeld gezien? Of juist liever niet? Of zag u een fout?
        Neem dan gerust contact met ons en wij zullen het nodige doen.
        <br/>
        <br/>
        De ARK kan niet verantwoordelijk gesteld worden voor foutieve links, noch voor de inhoud van de vermelde links.
        Dat wij de links hier vermelden wil niet zeggen dat wij altijd met de inhoud instemmen.
      </div>*/}
    </PageContainer>
    <JoinUsBannerStyled>
      <JoinUsImageStyled></JoinUsImageStyled>
      <JoinUsTextStyled id="doe-met-ons-mee">
        <TitleStyled fontSize={"1.5rem"} color={"white"}>Wilt u lid worden? Doe met ons mee!</TitleStyled>
        <TitleStyled fontSize={"1.5rem"} color={"white"}>Contacteer ons!</TitleStyled>
        <div>Wij nodigen u graag uit voor een nadere kennismaking.</div>
        <SmallContactFormStyled method="post" action="#">
          <div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Naam</ItalicTitleStyled></label>
            <div><input type="text" name="name" id="name" width="30rem"/>
            </div>
          </div>
          <div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email</ItalicTitleStyled></label>
            <div><input type="email" name="email" id="email"/>
            </div>
          </div>
          {/*<div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Onderwerp</ItalicTitleStyled></label>
            <div><input type="text" name="subject" id="subject"/>
            </div>
          </div>*/}
          <div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Bericht</ItalicTitleStyled></label>

            <div><textarea name="message" id="message" rows="5"/>
            </div>
          </div>
          <ButtonStyled type="submit">Stuur</ButtonStyled>
        </SmallContactFormStyled>

      </JoinUsTextStyled>
    </JoinUsBannerStyled>
  </Layout>
}

export default OurCommunityPage
