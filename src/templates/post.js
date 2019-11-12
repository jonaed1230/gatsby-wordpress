import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../pages/layout'
import "./template.css"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    console.log(post);

    return (
      <Layout>
        <h1 className="heading">Gatsby.js + Wordpress</h1>
        <h1 className="post-title">{post.title}</h1>
        <div className="desc" dangerouslySetInnerHTML={{__html: post.content}} />
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`