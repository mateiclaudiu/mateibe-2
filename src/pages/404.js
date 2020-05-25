import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SectionTitle } from "../components/section-title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <SectionTitle title={"OH 404, PAGE NOT FOUND BUDDY"} />
  </Layout>
)

export default NotFoundPage
