/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FooterStyled, LinkedInButton } from "./styled"
import styled from "styled-components"
import { GrLinkedin ,GrTwitter} from 'react-icons/gr';
import { RiStackOverflowLine } from "react-icons/ri"

const FooterBlockStyled = styled.div`
  margin-bottom:1rem;
`

const FooterBlockTitleStyled = styled.div`
  font-weight: 600;
  color:white;
 `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      },
      currentBuildDate {
        currentDate
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <FooterStyled>
          <div>
            <GrLinkedin/> <a style={{ textDecoration: "none", color: "gray" }} href="https://www.linkedin.com/in/claudiumatei/" target="_blank">Let's connect
            on LinkedIn</a>
          </div>
          <div>
            <RiStackOverflowLine/> <a style={{ textDecoration: "none", color: "gray" }} href="https://stackoverflow.com/users/4834129/claudiu" target="_blank">Stackoverflow</a>
          </div>
          <div>
            <GrTwitter/> <a style={{ textDecoration: "none", color: "gray" }} href="https://twitter.com/ClaudiuStack" target="_blank">@ClaudiuStack</a>
          </div>
          {/*<FooterBlockStyled>
            <FooterBlockTitleStyled >matei bv</FooterBlockTitleStyled>
            <div>Straat 1</div>
            <div>Antwerpen 0000</div>
            <div>BRW XXX XXXX XXX</div>
          </FooterBlockStyled>*/}
          {/*<div style={{ marginTop: `2rem`, color: `white` }}>*/}
          {/*  <Link to="/termsandconditions">Terms and Conditions</Link>*/}
          {/*</div>*/}
          <div style={{ marginTop: `2rem`, color: `gray` }}>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://www.matei.be/" target="_blank">matei bv</a> - last updated {data.currentBuildDate.currentDate}
          </div>
        </FooterStyled>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
