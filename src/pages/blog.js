import React from 'react'
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import { graphql } from 'gatsby'

export default function BlogPage({ data }) {

const nodes = data.allFile.nodes

  return(
    <Layout pageTitle='My Blog Posts'>
      <ul>
      {
        nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query{
    allFile(filter: {sourceInstanceName: {eq: "blog"}}){
      nodes{
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />
