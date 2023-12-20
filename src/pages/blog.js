import React from 'react'
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import { graphql } from 'gatsby'

export default function BlogPage({ data }) {

const nodes = data.allMdx.nodes

  return(
    <Layout pageTitle='My Blog Posts'>
      <ul>
      {
        nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />
