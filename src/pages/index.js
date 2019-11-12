import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import "./index.css"
import Layout from "./layout"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div>
          <h1 className="heading">Gatsby.js + Wordpress</h1>
          <div className="content">
            {data.allWordpressPage.edges.map(({ node }) => (
              <div key={node.slug}>
                <Link to={node.slug} className="title">
                  {node.title}
                </Link>
                <div
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  className="desc"
                />
              </div>
            ))}
          </div>
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} className="title">
                {node.title}
              </Link>
              <div
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
                className="desc"
              />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
