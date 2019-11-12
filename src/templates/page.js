import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../pages/layout'
import "./template.css";

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 className="heading">Gatsby.js + Wordpress</h1>
        <p className="post-title">{StaticPage.title}</p>
        <div className="desc" dangerouslySetInnerHTML={{__html: StaticPage.content}} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`