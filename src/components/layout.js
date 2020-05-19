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
import { FooterStyled } from "./styled"
import styled from "styled-components"

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
          {/*<FooterBlockStyled>
            <FooterBlockTitleStyled >matei bv</FooterBlockTitleStyled>
            <div>Straat 1</div>
            <div>Antwerpen 0000</div>
            <div>BRW XXX XXXX XXX</div>
          </FooterBlockStyled>*/}
          <div style={{ marginTop: `2rem`, color: `white` }}>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.matei.be/" target="_blank">Matei</a> - last update {data.currentBuildDate.currentDate}
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
